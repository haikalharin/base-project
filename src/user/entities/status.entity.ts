import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Status extends Model<Status> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  martial: string;

  @Column
  religion: string;

  @Column
  company: string;
}
