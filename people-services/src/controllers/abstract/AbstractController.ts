import AbstractDao from "../../dao/abstract/AbstractDao";

abstract class AbstractController {
  app: any;
  dao: AbstractDao;

  constructor( app: Object, dao: AbstractDao ) {
    this.app = app;
    this.dao = dao;
  }

  listen = async () => {
    await this.dao.connect();
    this.createEndPoints();
  }

  abstract createEndPoints(): void;
}

export default AbstractController;