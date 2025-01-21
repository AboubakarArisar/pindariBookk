export type Department =
  | "Computer Science"
  | "B.ED"
  | "BBA"
  | "Accounting Finance"
  | "Mathematics"
  | "Media Studies"
  | "Electrical Engineering"
  | "Computer System Engineering";

export interface Note {
  id: string;
  title: string;
  content: string;
  Author: string;
  Department: Department;
  imageUrl: string;
}
