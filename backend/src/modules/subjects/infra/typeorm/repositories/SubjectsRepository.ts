import { getRepository, Like, Repository } from 'typeorm';
import ISubjectsRepository from '@modules/subjects/repositories/ISubjectsRepository';
import ICreateSubjectDTO from '@modules/subjects/dtos/ICreateSubjectDTO';
import AppError from '@shared/errors/AppError';
import Subject from '../entities/Subject';

class SubjectRepository implements ISubjectsRepository {
  private ormRepository: Repository<Subject>;

  constructor() {
    this.ormRepository = getRepository(Subject);
  }

  async findByDescription(description: string): Promise<Subject[] | undefined> {
    if (!description) {
      throw new AppError('no descrition');
    }
    const subjects = await this.ormRepository.find({
      where: {
        description: Like(`%${description}%`),
      },
    });
    return subjects;
  }

  public async findById(id: string): Promise<Subject | undefined> {
    const subject = await this.ormRepository.findOne(id);

    return subject;
  }

  public async create(userData: ICreateSubjectDTO): Promise<Subject> {
    const subject = this.ormRepository.create(userData);

    await this.ormRepository.save(subject);

    return subject;
  }

  public async save(subject: Subject): Promise<Subject> {
    return this.ormRepository.save(subject);
  }
}

export default SubjectRepository;
