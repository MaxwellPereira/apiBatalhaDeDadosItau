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

@Entity('classTags')
class ClassTag {
  @PrimaryColumn()
  class_id: string;

  @PrimaryColumn()
  tag: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => MClass, mClass => mClass.class_tags)
  @JoinColumn([{ name: 'class_id', referencedColumnName: 'id' }])
  mClass: MClass;
}

export default ClassTag;
