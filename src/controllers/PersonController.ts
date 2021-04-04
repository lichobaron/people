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

    /*
    body example:
    {
      "fullname": "'Jorge Rodriguez'",
      "birth": "now()"
    }
    */
    this.app.post( PEOPLE_ROUTE, async (req: any, res: any) => {
      const person: Person = {
        id: "null",
        properties: req.body
      };
      const result = await personDao.addPerson( person );
      res.send( result );
    });
  };
}

export default PersonController;