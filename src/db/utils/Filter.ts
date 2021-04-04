export interface Filter {
  column: string;
  comparator: FilterComparator;
  value: string;
  operator: FilterOperator
}

export enum FilterComparator {
  EQ = "=",
  NEQ = "!=",
  GT = ">",
  GTE = ">=",
  LT = "<",
  LTE = "<="
}

export enum FilterOperator {
  AND = "AND",
  OR = "OR",
  END = "" 
}