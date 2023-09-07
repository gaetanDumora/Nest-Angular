export interface Task {
  id: number;
  createdAt: string;
  userId?: string;
  name: string;
  status: TaskStatus;
}
export enum TaskStatus {
  pending = 'PENDING',
  progress = 'PROGRESS',
  done = 'DONE',
}
