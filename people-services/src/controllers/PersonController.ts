import AbstractController from './abstract/AbstractController';
import PersonDao from '../dao/PersonDao';
import { PEOPLE_ROUTE, PERSON_ROUTE } from '../routes/person-routes';
import Person from '../models/Person';

class PersonController extends AbstractController {
  constructor( app: Object ) {
    super( app, new PersonDao() );
  }

  createEndPoints = () => {
    const personDao = this.dao as PersonDao;

    this.app.get( PEOPLE_ROUTE, async (req: any, res: any) => {
      const result = await personDao.getPeople();
      res.send( result );
    });

    this.app.get( PERSON_ROUTE, async (req: any, res: any) => {
      const result = await personDao.getPerson( req.params.id );
      res.send( result );
    });

    this.app.post( PEOPLE_ROUTE, async (req: any, res: any) => {
      const person: Person = {
        id: "null",
        properties: this.formatBody( req.body )
      };
      const result = await personDao.addPerson( person );
      res.send( result );
    });
  };

  private formatBody = ( body: any ) => {
    const { year, month, day } = body.birth;
    return {
      fullname: "'" + body.fullname + "'",
      birth: "make_date(" + year +"," + month + "," + day + ")"
    };
  };
}

export default PersonController;