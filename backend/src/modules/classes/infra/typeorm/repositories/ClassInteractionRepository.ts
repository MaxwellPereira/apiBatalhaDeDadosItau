import { getRepository, Repository } from 'typeorm';
import IClassInterectionRepository from '@modules/classes/repositories/IClassInteractionsRepository';
import ICreateClassInteractionDTO from '@modules/classes/dtos/ICreateClassInteractionDTO';
import ClassInteraction from '../entities/ClassInteraction';

class ClassInterectionRepository implements IClassInterectionRepository {
  private ormRepository: Repository<ClassInteraction>;

  constructor() {
    this.ormRepository = getRepository(ClassInteraction);
  }

  public async findInteraction(
    class_id: string,
    user_id: string,
  ): Promise<ClassInteraction | undefined> {
    const classInterection = await this.ormRepository.findOne({
      where: { classId: class_id, userId: user_id },
    });
    return classInterection;
  }

  public async create(
    data: ICreateClassInteractionDTO,
  ): Promise<ClassInteraction> {
    const classInteraction = await this.create(data);
    return classInteraction;
  }

  public async save(
    classInteraction: ClassInteraction,
  ): Promise<ClassInteraction> {
    return this.ormRepository.save(classInteraction);
  }

  public async updateComment(
    class_id: string,
    user_id: string,
    comment: string,
  ): Promise<void> {
    const classInterection = await this.ormRepository.findOne({
      where: { classId: class_id, userId: user_id },
    });
    if (!classInterection) {
      await this.create({
        userId: user_id,
        classId: class_id,
        comment,
        score: 0,
      });
      return;
    }
    classInterection.comment = comment;

    await this.ormRepository.save(classInterection);
  }

  public async updateScore(
    class_id: string,
    user_id: string,
    score: 0 | 1 | -1,
  ): Promise<void> {
    const classInterection = await this.ormRepository.findOne({
      where: { classId: class_id, userId: user_id },
    });
    if (!classInterection) {
      await this.create({
        userId: user_id,
        classId: class_id,
        comment: '',
        score,
      });
      return;
    }
    classInterection.score = score;

    await this.ormRepository.save(classInterection);
  }
}

export default ClassInterectionRepository;
