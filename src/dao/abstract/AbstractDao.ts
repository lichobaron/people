import { Client } from "pg";
import { con } from '../../config/db';
import SqlStatement from "../../db/statements/abstract/SqlStatement";

abstract class AbstractDao {
  client: Client = new Client( con );
  
  constructor() {}

  connect = async () => {
    await this.client.connect();
  };  

  protected executeQuery = async ( statement: SqlStatement ) => {
    let error = null;

    const data = await this.client.query(
      statement.getStatement()
    ).then( res => res ).catch( err => { 
      error = err;
      return err;
    });

    return { data, error };
  };
}

export default AbstractDao;