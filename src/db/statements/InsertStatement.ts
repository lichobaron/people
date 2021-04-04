import SqlStatement from "./abstract/SqlStatement";

class InsertStatement extends SqlStatement {
  values: string[];

  constructor( columns: string[], tablename: string, values: string[] ) {
    super( columns, tablename );
    this.values = values;
  }

  public getStatement = (): string => {
    if ( this.validateSql() )
    {
      this.statement = this.addInsert() + this.addColumns() + this.addValues();
    }

    return this.statement;
  };
  
  private addInsert = () => {
    return "INSERT INTO " + this.tablename + " ";
  };

  private addColumns = () => {
    const columns = this.columns;
    let columnsStr = "( ";

    for ( let i = 0; i < columns.length; i++)
    {
      if ( i < columns.length - 1 )
        columnsStr += columns[ i ] + ",";
      else
        columnsStr += columns[ i ];
    }

    columnsStr += ") \n";

    return columnsStr;
  };

  private addValues = () => {
    const values = this.values;
    let valuesStr = 'VALUES ( ';

    for ( let i = 0; i < values.length; i++)
    {
      if ( i < values.length - 1 )
        valuesStr += values[ i ] + ",";
      else
        valuesStr += values[ i ];
    }

    valuesStr += ")";

    return valuesStr;
  };

  protected validateSql = (): boolean => {
    //TODO
    return this.values.length === this.columns.length;
  };
}

export default InsertStatement;