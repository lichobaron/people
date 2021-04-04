import SqlStatement from "./abstract/SqlStatement";
import { Filter } from "../utils/Filter";


class SelectStatement extends SqlStatement {
  filters: Filter[];

  constructor( columns: string[], tablename: string, filters: Filter[] ) {
    super( columns, tablename );
    this.filters = filters;
  }

  public getStatement = (): string => {
    const WHERE = this.addWhere();
    
    if ( this.validateSql() )
    {
      this.statement = this.addSelect() + this.addFrom() + WHERE;
    }

    return this.statement;
  };

  private addSelect = (): string => {
    const columns = this.columns;
    let select = "SELECT ";
  
    if ( columns.length > 0 )
    {
      for ( let i = 0; i < columns.length; i++)
      {
        if ( i < columns.length - 1 )
          select += columns[ i ] + ",";
        else
          select += columns[ i ];
      }
    }
    else
    {
      select += "*";
    }
  
    select += "\n";
  
    return select;
  };
  
  private addFrom = () => {
    return "FROM " + this.tablename + "\n";
  };
  
  private addWhere = () => {
    const filters = this.filters;

    if ( filters.length == 0 )
      return "";

    let where = "WHERE ";

    filters.forEach( filter => {
      const { column, comparator, value, operator } = filter;
      where = where + column + comparator + value + operator;
    });

    where += "\n";

    return where;
  };

  protected validateSql = (): boolean => {
    //TODO
    return true;
  };
}

export default SelectStatement;