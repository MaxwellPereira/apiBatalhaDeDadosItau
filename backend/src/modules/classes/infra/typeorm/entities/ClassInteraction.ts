/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import MClass from './MClass';

@Entity('classInteractions')
class ClassInteraction {
  @PrimaryColumn()
  class_id: string;

  @PrimaryColumn()
  user_id: string;

  @Column()
  score: 0 | 1 | -1;

  @Column()
  comment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => MClass, mClass => mClass.class_interactions)
  @JoinColumn([{ name: 'class_id', referencedColumnName: 'id' }])
  mClass: MClass;
}

export default ClassInteraction;
