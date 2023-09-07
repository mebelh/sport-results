import { ApproachEntity } from 'approach/approach.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from 'user/user.entity';

@Entity('result')
export class ResultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.results)
  user: UserEntity;

  @OneToMany(() => ApproachEntity, (approach) => approach)
  approaches: ApproachEntity[];
}
