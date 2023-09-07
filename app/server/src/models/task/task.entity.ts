import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

export enum TaskStatus {
  pending = 'PENDING',
  progress = 'PROGRESS',
  done = 'DONE',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ nullable: false, name: 'task_name' })
  name: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ nullable: false, name: 'task_status', default: TaskStatus.pending })
  status: TaskStatus;
}
