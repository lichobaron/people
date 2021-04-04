abstract class SqlStatement {
  columns: string[];
  tablename: string; 
  statement: string = "null";

  constructor( columns: string[], tablename: string ) {
    this.columns = columns;
    this.tablename = tablename;
  }

  abstract getStatement(): string;

  protected abstract validateSql(): boolean;
}

export default SqlStatement;