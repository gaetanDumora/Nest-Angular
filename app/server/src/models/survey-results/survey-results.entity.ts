import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class SurveyResults {
  @Column({ nullable: true, name: 'user_id' })
  userId: string;

  @PrimaryColumn({ name: 'surver_result_id' })
  surverResultId: string;

  @Column({ nullable: true, name: 'created_at' })
  createdAt: string;
}
