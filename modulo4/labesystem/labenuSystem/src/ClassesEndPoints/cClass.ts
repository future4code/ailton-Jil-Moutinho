import { Request, Response } from "express";
import { ClassesData } from "../ClassesData/cClassesData";
import { MissingFields } from "../error/MissingFields";
import { ModuloNotPermit } from "../error/ModuleNotPermite";
import { Classes } from "../model/Classes";

export class ClassesEndpoint {
  async create(req: Request, res: Response) {
    try {
      const { class_name, module } = req.body;

      if (!class_name) {
        throw new MissingFields();
      }

      const newClass = new Classes(class_name, Number(module));
      const newClassData = new ClassesData();

      const result = await newClassData.createClasses(newClass);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async changeModule(req: Request, res: Response) {
    try {
      const { id, module } = req.body;

      if (!id || !module) {
        throw new MissingFields();
      }

      if (
        isNaN(Number(id)) ||
        isNaN(Number(module)) ||
        module < 0 ||
        module > 6
      ) {
        throw new ModuloNotPermit();
      }

      const classesData = new ClassesData();

      const result = await classesData.changeModule(id, module) 

      res.status(200).send({ message: result });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  async selectActive(req: Request, res: Response) {
    try {
      const classesData = new ClassesData();

      const result = await classesData.selectActiveClasses();

      res.status(200).send(result);
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
