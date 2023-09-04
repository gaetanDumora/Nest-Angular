import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, name: 'step_id' })
  stepId: string;

  @Column({ nullable: true, name: 'step_title' })
  stepTitle: string;

  @Column({ nullable: true, name: 'step_index' })
  stepIndex: number;

  @Column({ nullable: true, name: 'question_id' })
  questionId: string;

  @Column({ nullable: true, name: 'question_index' })
  questionIndex: number;

  @Column({ nullable: true, name: 'question_label' })
  questionLabel: string;
}
