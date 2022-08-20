import express, { Express } from "express";
import cors from "cors";
import { Spend, Client, clientsList } from "./data";
import { AddressInfo } from "net";

const app: Express = express();

app.use(cors());
app.use(express.json());

//Ex5 Criar client e Ex7 validar idade e Desafio1 validar se já existe CPF
app.post("/clients", (req, res) => {
  const { CPF, name } = req.body;
  const birthDate: string = req.body.birthDate as string;

  //Ex7
  const dateToTimeStamp = (data: string): number => {
    const fullDate = data.split("/");
    const year = Number(fullDate[2]);
    const month = Number(fullDate[1]) - 1;
    const day = Number(fullDate[0]);
    return new Date(year, month, day).getTime();
  };

  let timestampToday = new Date().getTime();

  let age =
    timestampToday / 31536000000 - dateToTimeStamp(birthDate) / 31536000000;

  try {
    if (!CPF || !name || !birthDate) {
      res.statusCode = 400; //bad request
      throw new Error(
        "Info of new client not identified. Please check the fields!"
      );
    }

    if (age < 18) {
      res.statusCode = 412; //precondicion failed
      throw new Error("Client is not of legal age - not 18 years old yet.");
    }

    //Desafio 1
    const AlreadyExist: boolean =
      clientsList.filter((item) => {
        item.CPF === CPF;
      }).length !== 0;
    /* const Exist: Client[] = clientsList.filter((item)=> {item.CPF.includes(CPF)}) */

    if (AlreadyExist) {
      res.statusCode = 400; //bad request
      throw new Error("There is already a client with this CPF");
    }

    const newClient = {
      name,
      CPF,
      birthDate,
      balance: 0,
      spends: [],
    };

    clientsList.push(newClient);
    res
      .status(200)
      .send({ message: "Client registered successfully", data: clientsList });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Ex6 Todos os usuários
app.get("/clients", (req, res) => {
  try {
    if (!clientsList) {
      res.statusCode = 404;
      throw new Error("List not found.");
    }

    res
      .status(200)
      .send({ message: "List found successfully", data: clientsList });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Desafio 2 pega um usuario valida o formato do CPF e traz os dados
app.get("/clientByNameAndCPF/:cpf", (req, res) => {
  const name1 = req.query.name as string;
  const name = name1.toLowerCase();
  const CPF = req.params.cpf as string;

  try {
    if (!clientsList) {
      res.statusCode = 404;
      throw new Error("List not found.");
    }

    if (!name && !CPF) {
      res.statusCode = 400; //bad request
      throw new Error("Inform name and CPF");
    }

    if (name === "" || CPF === "") {
      res.statusCode = 400; //bad request
      throw new Error("Inform name and CPF");
    }

    //Desafio2
    const splitCPF = CPF.split(".");
    const firstCPF = splitCPF[0];
    const secondCPF = splitCPF[1];
    const thirdWithDigCPF = splitCPF[2].split("-");
    const thirdCPF = thirdWithDigCPF[0];
    const DigCPF = thirdWithDigCPF[1];
    const lengthOfCPF = CPF.length;

    const formatOk: boolean =
      CPF[3] === "." &&
      CPF[7] === "." &&
      CPF[11] === "-" &&
      firstCPF.length === 3 &&
      !isNaN(Number(firstCPF)) &&
      secondCPF.length === 3 &&
      !isNaN(Number(secondCPF)) &&
      thirdCPF.length === 3 &&
      !isNaN(Number(thirdCPF)) &&
      DigCPF.length === 2 &&
      !isNaN(Number(DigCPF)) &&
      lengthOfCPF === 14;

    if (!formatOk) {
      res.statusCode = 422; //unprocessable entity
      throw new Error("Inform valid CPF - The format must be XXX.XXX.XXX-XX");
    }

    const clientByNameAndCPF: Client | undefined = clientsList.find((item) => {
      return item.name.toLowerCase() === name && item.CPF === CPF;
    });

    if (name !== "" && CPF !== "" && formatOk && !clientByNameAndCPF) {
      res.statusCode = 404; //not found
      throw new Error("User with this name and CPF not found");
    }
    if (clientByNameAndCPF !== undefined) {
      res.status(200).send({
        message: `Balance is: ${clientByNameAndCPF.balance}`,
        data: clientByNameAndCPF,
      });
    }
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Desafio 3 Adiciona valor ao saldo depois muda pro Desafio 4, não muda saldo mas add no extrato
app.put("/clientByNameAndCPF/deposito", (req, res) => {
  const name1 = req.body.name as string;
  const name = name1.toLowerCase();
  const CPF = req.body.CPF as string;
  const deposit = req.body.deposit;

  try {
    if (!clientsList) {
      res.statusCode = 404;
      throw new Error("List not found.");
    }

    if (!name && !CPF && !deposit) {
      res.statusCode = 400; //bad request
      throw new Error("Inform name, CPF and deposit value.");
    }

    if (name === "" || CPF === "" || deposit === "") {
      res.statusCode = 400; //bad request
      throw new Error("Inform name, CPF and deposit value.");
    }

    //Desafio2
    const splitCPF = CPF.split(".");
    const firstCPF = splitCPF[0];
    const secondCPF = splitCPF[1];
    const thirdWithDigCPF = splitCPF[2].split("-");
    const thirdCPF = thirdWithDigCPF[0];
    const DigCPF = thirdWithDigCPF[1];
    const lengthOfCPF = CPF.length;

    const formatOk: boolean =
      CPF[3] === "." &&
      CPF[7] === "." &&
      CPF[11] === "-" &&
      firstCPF.length === 3 &&
      !isNaN(Number(firstCPF)) &&
      secondCPF.length === 3 &&
      !isNaN(Number(secondCPF)) &&
      thirdCPF.length === 3 &&
      !isNaN(Number(thirdCPF)) &&
      DigCPF.length === 2 &&
      !isNaN(Number(DigCPF)) &&
      lengthOfCPF === 14;

    if (!formatOk) {
      res.statusCode = 422; //unprocessable entity
      throw new Error("Inform valid CPF - The format must be XXX.XXX.XXX-XX");
    }

    if (isNaN(Number(deposit))) {
      res.statusCode = 422; //unprocessable entity
      throw new Error("Inform a valid amont for deposit - type number");
    }

    const clientByNameAndCPF: Client | undefined = clientsList.find((item) => {
      return item.name.toLowerCase() === name && item.CPF === CPF;
    });

    if (name !== "" && CPF !== "" && formatOk && !clientByNameAndCPF) {
      res.statusCode = 404; //not found
      throw new Error("User with this name and CPF not found");
    }

    const today = new Date();
    const newDeposit: Spend = {
      value: deposit,
      date: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
      description: "Depósito em dinheiro",
    };

    if (clientByNameAndCPF !== undefined) {
      clientByNameAndCPF.spends = [...clientByNameAndCPF.spends, newDeposit];
      /* clientByNameAndCPF.balance += deposit; */
      res.status(200).send({
        message: `Deposit added successfully.`, //Balance: ${clientByNameAndCPF.balance}
        data: clientByNameAndCPF,
      });
    }
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Desafio 5 Pagar conta
app.post("/clientByNameAndCPF/paybill", (req, res) => {
  const name1 = req.body.name as string;
  const name = name1.toLowerCase();
  const CPF = req.body.CPF as string;
  const dueDate = req.body.dueDate as string;
  const description = req.body.description as string;
  const billValue = req.body.billValue;

  try {
    if (!clientsList) {
      res.statusCode = 404;
      throw new Error("List not found.");
    }

    if (!name || !CPF || !dueDate || !description || !billValue) {
      res.statusCode = 400; //bad request
      throw new Error(
        "Inform name, CPF, bill's due date, value and description."
      );
    }

    //Desafio2
    const splitCPF = CPF.split(".");
    const firstCPF = splitCPF[0];
    const secondCPF = splitCPF[1];
    const thirdWithDigCPF = splitCPF[2].split("-");
    const thirdCPF = thirdWithDigCPF[0];
    const DigCPF = thirdWithDigCPF[1];
    const lengthOfCPF = CPF.length;

    const formatOk: boolean =
      CPF[3] === "." &&
      CPF[7] === "." &&
      CPF[11] === "-" &&
      firstCPF.length === 3 &&
      !isNaN(Number(firstCPF)) &&
      secondCPF.length === 3 &&
      !isNaN(Number(secondCPF)) &&
      thirdCPF.length === 3 &&
      !isNaN(Number(thirdCPF)) &&
      DigCPF.length === 2 &&
      !isNaN(Number(DigCPF)) &&
      lengthOfCPF === 14;

    if (!formatOk) {
      res.statusCode = 422; //unprocessable entity
      throw new Error("Inform valid CPF - The format must be XXX.XXX.XXX-XX");
    }

    if (isNaN(Number(billValue))) {
      res.statusCode = 422; //unprocessable entity
      throw new Error("Inform a valid amont for billValue - type number");
    }

    //Desafio7 Conta n deve estar vencida
    const dateToTimeStamp = (data: string): number => {
      const fullDate = data.split("/");
      const year = Number(fullDate[2]);
      const month = Number(fullDate[1]) - 1;
      const day = Number(fullDate[0]);
      return new Date(year, month, day).getTime();
    };

    let timestampToday = new Date().getTime();
    let expirationDate = timestampToday - dateToTimeStamp(dueDate);

    if (expirationDate > 0) {
      res.statusCode = 422; //unprocessable entity
      throw new Error("The bill's due date has expired");
    }

    const clientByNameAndCPF: Client | undefined = clientsList.find((item) => {
      return item.name.toLowerCase() === name && item.CPF === CPF;
    });

    if (
      name !== "" &&
      CPF !== "" &&
      formatOk &&
      expirationDate <= 0 &&
      !clientByNameAndCPF
    ) {
      res.statusCode = 404; //not found
      throw new Error("User with this name and CPF not found");
    }

    //Desafio 8
    let hasBalanceToPay: number = 0;
    if (clientByNameAndCPF !== undefined) {
      hasBalanceToPay = clientByNameAndCPF?.balance - Number(billValue);
    }

    if (clientByNameAndCPF !== undefined && hasBalanceToPay < 0) {
      res.statusCode = 401; //unauthorized
      throw new Error(
        "Client does not have enough balance for this transaction."
      );
    }

    if (clientByNameAndCPF !== undefined && hasBalanceToPay >= 0) {
      clientByNameAndCPF.spends = [
        ...clientByNameAndCPF.spends,
        {
          value: -1 * Number(billValue),
          date: dueDate,
          description: description,
        },
      ];
      res.status(200).send(clientByNameAndCPF);
    }
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Desafio 6 Atualiza saldo
app.put("/clientByCPF/saldo", (req, res) => {
  const CPF = req.body.CPF as string;

  try {
    if (!clientsList) {
      res.statusCode = 404;
      throw new Error("List not found.");
    }

    if (!CPF || CPF === "") {
      res.statusCode = 400; //bad request
      throw new Error("Inform CPF and deposit value.");
    }

    //Desafio2
    const splitCPF = CPF.split(".");
    const firstCPF = splitCPF[0];
    const secondCPF = splitCPF[1];
    const thirdWithDigCPF = splitCPF[2].split("-");
    const thirdCPF = thirdWithDigCPF[0];
    const DigCPF = thirdWithDigCPF[1];
    const lengthOfCPF = CPF.length;

    const formatOk: boolean =
      CPF[3] === "." &&
      CPF[7] === "." &&
      CPF[11] === "-" &&
      firstCPF.length === 3 &&
      !isNaN(Number(firstCPF)) &&
      secondCPF.length === 3 &&
      !isNaN(Number(secondCPF)) &&
      thirdCPF.length === 3 &&
      !isNaN(Number(thirdCPF)) &&
      DigCPF.length === 2 &&
      !isNaN(Number(DigCPF)) &&
      lengthOfCPF === 14;

    if (!formatOk) {
      res.statusCode = 422; //unprocessable entity
      throw new Error("Inform valid CPF - The format must be XXX.XXX.XXX-XX");
    }

    const clientByCPF: Client | undefined = clientsList.find((item) => {
      return item.CPF === CPF;
    });

    if (CPF !== "" && formatOk && !clientByCPF) {
      res.statusCode = 404; //not found
      throw new Error("User with this name and CPF not found");
    }
    //Desafio 6 não fiz verificação para dias anteriores a hoje
    const dateToTimeStamp = (data: string): number => {
      const fullDate = data.split("/");
      const year = Number(fullDate[2]);
      const month = Number(fullDate[1]) - 1;
      const day = Number(fullDate[0]);
      return new Date(year, month, day).getTime();
    };
    let timestampToday = new Date().getTime();
    let diference = (dateOfSpend: string): number => {
      const difValue =
        timestampToday / 31536000000 -
        dateToTimeStamp(dateOfSpend) / 31536000000;
      return difValue;
    };

    if (clientByCPF !== undefined) {
      for (let item of clientByCPF?.spends) {
        if (diference(item.date) > 0) {
          clientByCPF.balance += item.value;
        }
      }

      const oldSpends: Spend[] = clientByCPF?.spends.filter((item) => {
        return diference(item.date) > 0;
      });

      const newSpends: Spend[] = clientByCPF?.spends.filter((item) => {
        return diference(item.date) <= 0;
      });
      clientByCPF.spends = [...newSpends];

      res.status(200).send({
        message: `Balance updated successfully. Balance: ${clientByCPF.balance}`,
        data: clientByCPF,
        oldExtract: oldSpends,
      });
    }
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Desafio9 tranferência entre contas. Desafio10 Se há saldo suficiente. Desafio11 Verificar se existem
app.post("/clientByNameAndCPF/transfer", (req, res) => {
  const name1 = req.body.name as string;
  const name = name1.toLowerCase();
  const { CPF, toCPF, amount } = req.body;
  const toName1 = req.body.toName as string;
  const toName = toName1.toLowerCase();

  try {
    if (!clientsList) {
      res.statusCode = 404;
      throw new Error("List not found.");
    }

    if (!name || !CPF || !toName || !toCPF || !amount) {
      res.statusCode = 400; //bad request
      throw new Error(
        "Inform your name and CPF, the amount, name and CPF of the person you want to transfer for."
      );
    }

    if (isNaN(Number(amount)) || Number(amount) < 0) {
      res.statusCode = 422; //unprocessable entity
      throw new Error(
        "Inform a valid amont for billValue - type number bigger than U$0.00."
      );
    }

    //Desafio2
    const splitCPF = CPF.split(".");
    const firstCPF = splitCPF[0];
    const secondCPF = splitCPF[1];
    const thirdWithDigCPF = splitCPF[2].split("-");
    const thirdCPF = thirdWithDigCPF[0];
    const DigCPF = thirdWithDigCPF[1];
    const lengthOfCPF = CPF.length;

    const formatOk: boolean =
      CPF[3] === "." &&
      CPF[7] === "." &&
      CPF[11] === "-" &&
      firstCPF.length === 3 &&
      !isNaN(Number(firstCPF)) &&
      secondCPF.length === 3 &&
      !isNaN(Number(secondCPF)) &&
      thirdCPF.length === 3 &&
      !isNaN(Number(thirdCPF)) &&
      DigCPF.length === 2 &&
      !isNaN(Number(DigCPF)) &&
      lengthOfCPF === 14;

    if (!formatOk) {
      res.statusCode = 422; //unprocessable entity
      throw new Error("Inform valid CPF - The format must be XXX.XXX.XXX-XX");
    }

    //Desafio11
    const clientByNameAndCPF: Client | undefined = clientsList.find((item) => {
      return item.name.toLowerCase() === name && item.CPF === CPF;
    });

    const clientToSend: Client | undefined = clientsList.find((item) => {
      return item.name.toLowerCase() === toName && item.CPF === toCPF;
    });

    if (!clientByNameAndCPF) {
      res.statusCode = 404; //not found
      throw new Error("Client with this name and CPF not found");
    }

    if (!clientToSend) {
      res.statusCode = 404; //not found
      throw new Error("Receiver client with this name and CPF not found");
    }

    //Desafio 10
    let hasBalanceToPay: number = 0;
    if (clientByNameAndCPF !== undefined && clientToSend !== undefined) {
      hasBalanceToPay = clientByNameAndCPF?.balance - Number(amount);
    }

    if (
      clientByNameAndCPF !== undefined &&
      clientToSend !== undefined &&
      hasBalanceToPay < 0
    ) {
      res.statusCode = 401; //unauthorized
      throw new Error(
        "Client does not have enough balance for this transaction."
      );
    }

    const today = new Date();
    const newToday: string = `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`;

    if (
      clientByNameAndCPF !== undefined &&
      clientToSend !== undefined &&
      hasBalanceToPay >= 0
    ) {
      clientByNameAndCPF.spends = [
        ...clientByNameAndCPF.spends,
        {
          value: -1 * Number(amount),
          date: newToday,
          description: `Transfer to ${toName1}`,
        },
      ];

      clientToSend.spends = [
        ...clientToSend.spends,
        {
          value: Number(amount),
          date: newToday,
          description: `Transfer from ${name1}`,
        },
      ];

      res.status(200).send({
        message: "Transfer performed successfully",
        data: clientByNameAndCPF.spends,
        dataTo: clientToSend.spends,
      });
    }
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
