/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import ClassTag from './ClassTag';
import ClassInteractions from './ClassInteraction';

@Entity('classes')
class MClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  subject: string;

  @Column()
  shortDescription: string;

  @Column()
  description: string;

  @Column()
  urlAdress: string;

  @Column()
  likes: number;

  @Column()
  unLikes: number;

  @Column()
  rankAccess: number;

  @Column()
  rankPoints: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => ClassTag, classTag => classTag.mClass)
  class_tags: ClassTag[];

  @OneToMany(
    () => ClassInteractions,
    classInterection => classInterection.mClass,
  )
  class_interactions: ClassInteractions[];
}

export default MClass;
