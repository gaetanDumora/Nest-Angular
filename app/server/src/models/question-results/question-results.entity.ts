import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class QuestionResults {
  @Column({ nullable: true, name: 'question_id' })
  questionId: string;

  @PrimaryColumn({ name: 'question_result_id' })
  questionResultId: string;

  @Column({ nullable: true, name: 'answer_id' })
  answerId: string;

  @Column({ nullable: true, name: 'survey_result_id' })
  surveyResultId: string;

  @Column({ nullable: true, name: 'created_at' })
  createdAt: string;

  @Column({ nullable: true })
  answer: string;

  @Column({ nullable: true, name: 'answer_label' })
  answerLabel: string;
}
