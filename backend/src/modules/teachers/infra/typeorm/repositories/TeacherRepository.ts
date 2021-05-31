import { getRepository, Like, Repository } from 'typeorm';
import ISubjectsRepository from '@modules/subjects/repositories/ISubjectsRepository';
import AppError from '@shared/errors/AppError';
import User from '@modules/subjects/infra/typeorm/entities/Subject';

class SubjectRepository implements ISubjectsRepository {
  private ormRepository: Repository<Subject>;

  constructor() {
    this.ormRepository = getRepository(Subject);
  }

  findById(id: string): Promise<User | undefined> {
    throw new Error('Method not implemented.');
  }

  findByDescription(description: string): Promise<User[] | undefined> {
    throw new Error('Method not implemented.');
  }

  create(data: any): Promise<User> {
    throw new Error('Method not implemented.');
  }

  save(subject: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

export default SubjectRepository;
