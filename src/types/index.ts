export type Department = 
  | 'Computer Science'
  | 'BBA'
  | 'Accounting & Finance'
  | 'Electrical Engineering'
  | 'Computer System Engineering'
  | 'Mathematics'
  | 'B.Ed'
  | 'Media Studies';

export interface Note {
  id: string;
  title: string;
  content: string;
  department: Department;
  author: string;
  createdAt: Date;
  imageUrl?: string;
}