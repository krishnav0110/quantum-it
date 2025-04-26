export type CellType = "text" | "date" | "actions";

export type ColumnsDef = { header: string; key: string; type?: CellType }[];
