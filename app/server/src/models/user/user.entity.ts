import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true, name: 'createdat' })
  createdAt: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true, name: 'birthyear' })
  birthYear: string;

  @Column({ nullable: true })
  degree: string;

  @Column({ nullable: true, name: 'worksituation' })
  workSituation: string;
}
