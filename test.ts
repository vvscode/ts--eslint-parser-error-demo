type TableColumn = string;

function isColumnString(column: TableColumn): column is string {
  return typeof this.column === 'string';
}

const x = {
  a: 1,
} as const;
