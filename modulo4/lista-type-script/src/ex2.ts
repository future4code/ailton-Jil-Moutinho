const tipoDoParametro = (parametro: any): any => {
  if (typeof parametro !== "object") {
    return typeof parametro;
  } else if (Array.isArray(parametro)) {
    return "array";
  } else {
    return "object";
  }
};

console.log(tipoDoParametro("caridade"));
console.log(tipoDoParametro(1 == 1));
console.log(tipoDoParametro([1, 2, 3])); //JS entende q [] é objeto
console.log(tipoDoParametro({ num1: 1, num2: 2 }));
