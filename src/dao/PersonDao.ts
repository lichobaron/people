import AbstractDao from "./abstract/AbstractDao";
import SelectStatement from "../db/statements/SelectStatement";
import InsertStatement from "../db/statements/InsertStatement";
import { FilterComparator, FilterOperator } from "../db/utils/Filter";
import Person from '../models/Person';

const TABLE_NAME = "person";

class PersonDao extends AbstractDao {  
  constructor() {
    super();
  }

  getPeople = async () => {
    let statement = new SelectStatement( [], TABLE_NAME, [] );
    let people: Person[] = [];
  
    const queryResult = await this.executeQuery( statement );
  
    if ( !queryResult.error ) 
    {
      queryResult.data.rows.forEach( (row: { person_id: any; }) => {
        const person: Person = {
          id: row.person_id,
          properties: row
        };
        people.push(person);
      });
    }
  
    return {
      result: people
    };
  }

  getPerson = async ( personId: string ) => {
    let statement = new SelectStatement( [], TABLE_NAME, [ { 
      column: "person_id",
      comparator: FilterComparator.EQ,
      value: personId,
      operator: FilterOperator.END
    } ] );
    let person: Person = {
      id: "null",
      properties: {}
    };

    const queryResult = await this.executeQuery( statement ); 

    if ( !queryResult.error ) 
    {
      const row =  queryResult.data.rows[ 0 ];
      person = {
        id: row.person_id,
        properties: row
      }
    }

    return { result: person };
  };

  addPerson = async ( person: Person ) => {
    let columns: string[] = [];
    let values: string[] = [];
    const keys = Object.keys( person.properties );

    keys.forEach( key => {
      columns.push( key );
      values.push( person.properties[ key ] );
    });

    let statement = new InsertStatement( columns, TABLE_NAME, values );

    const queryResult = await this.executeQuery( statement );

    return {
      result: {
        success: "Rows inserted: " + queryResult.data.rowCount,
        error: queryResult.error
      }
    };
  };
}

export default PersonDao;