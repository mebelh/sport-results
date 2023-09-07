import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authCode')
export class AuthCodeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  code: string;

  @Column('varchar')
  phone: string;
}
