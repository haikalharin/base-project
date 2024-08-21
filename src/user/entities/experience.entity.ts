import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Experience extends Model<Experience> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  company: string;

  @Column
  adress: string;

  @Column
  reason: string;
}
