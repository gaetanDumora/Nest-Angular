import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  birthYear: string;

  @Column({ nullable: true })
  degree: string;

  @Column({ nullable: true })
  workSituation: string;
}
