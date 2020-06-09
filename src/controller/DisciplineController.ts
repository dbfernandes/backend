import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Disciplina } from "../entity/Disciplina";

export default class DisciplineController {
  private actionRepository = getRepository(Disciplina);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.actionRepository.find({ select: ["id", "codigo", "nome", "cargaHoraria", "creditos"] });
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.actionRepository.findOne(request.params.id);
  }

  async create(request: Request, response: Response, next: NextFunction) {
    return this.actionRepository.save(request.body);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    return this.actionRepository.save(request.body);
  }  

  async remove(request: Request, response: Response, next: NextFunction) {
    let actionToRemove = await this.actionRepository.findOne(request.params.id);
    await this.actionRepository.remove(actionToRemove);
  }
}
