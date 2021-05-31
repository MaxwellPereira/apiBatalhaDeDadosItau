import { getRepository, Repository } from 'typeorm';
import IStudentsRepository from '@modules/students/repositories/IStudentRepository';
import AppError from '@shared/errors/AppError';
import ICreateStudentDTO from '@modules/students/dtos/ICreateStudentDTO';
import Student from '@modules/students/infra/typeorm/entities/Student';

class SubjectRepository implements IStudentsRepository {
  private ormRepository: Repository<Student>;

  constructor() {
    this.ormRepository = getRepository(Student);
  }

  findByIdentityStudent(email: string): Promise<Student | undefined> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<Student | undefined> {
    throw new Error('Method not implemented.');
  }

  create(data: ICreateStudentDTO): Promise<Student> {
    throw new Error('Method not implemented.');
  }

  save(subject: Student): Promise<Student> {
    throw new Error('Method not implemented.');
  }
}

export default SubjectRepository;
