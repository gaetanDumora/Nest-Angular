import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Mode {
  @Column({ nullable: true, name: 'survey_result_id' })
  surveyResultId: string;

  @PrimaryColumn({ name: 'workoscope_result_id' })
  workoscopeResultId: string;

  @Column({ type: 'json' })
  scores: { mode: string; mode_score: number }[];
}
