import { getRepository, Repository } from 'typeorm';
import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import ICreateClassDTO from '@modules/classes/dtos/ICreateClassDTO';
import AppError from '@shared/errors/AppError';
import MClass from '../entities/MClass';

class ClassesRepository implements IClassesRepository {
  private ormRepository: Repository<MClass>;

  constructor() {
    this.ormRepository = getRepository(MClass);
  }

  public async findById(classId: string): Promise<MClass | undefined> {
    const mClass = await this.ormRepository.findOne(classId);

    return mClass;
  }

  public async findBySubject(subject: string): Promise<MClass[]> {
    const mClass = await this.ormRepository.find({
      where: { subject },
    });
    return mClass;
  }

  public async create(data: ICreateClassDTO): Promise<MClass> {
    const mClass = await this.create(data);
    return mClass;
  }

  save(mClass: MClass): Promise<MClass> {
    return this.ormRepository.save(mClass);
  }

  public async incrementRankAccess(classId: string): Promise<number> {
    const mClass = await this.ormRepository.findOne(classId);
    if (!mClass) {
      throw new AppError('Aula não encontrada');
    }
    const newRankAccess = mClass?.rankAccess || 0 + 1;
    mClass.rankAccess = newRankAccess;
    await this.ormRepository.save(mClass);
    return newRankAccess;
  }

  public async incrementRankPoints(classId: string): Promise<number> {
    const mClass = await this.ormRepository.findOne(classId);
    if (!mClass) {
      throw new AppError('Aula não encontrada');
    }
    const newRankPoints = mClass?.rankAccess || 0 + 1;
    mClass.rankPoints = newRankPoints;
    await this.ormRepository.save(mClass);
    return newRankPoints;
  }

  public async decrementRankAccess(classId: string): Promise<number> {
    const mClass = await this.ormRepository.findOne(classId);
    if (!mClass) {
      throw new AppError('Aula não encontrada');
    }
    const newRankAccess = mClass?.rankAccess || 0 - 1;
    mClass.rankAccess = newRankAccess;
    await this.ormRepository.save(mClass);
    return newRankAccess;
  }

  public async decrementRankPoints(classId: string): Promise<number> {
    const mClass = await this.ormRepository.findOne(classId);
    if (!mClass) {
      throw new AppError('Aula não encontrada');
    }
    const newRankPoints = mClass?.rankAccess || 0 - 1;
    mClass.rankPoints = newRankPoints;
    await this.ormRepository.save(mClass);
    return newRankPoints;
  }
}

export default ClassesRepository;
