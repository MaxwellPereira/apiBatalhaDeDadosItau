import Subject from '@modules/subjects/infra/typeorm/entities/Subject';
import ICreateTeacherDTO from '@modules/teachers/dtos/ICreateTeacherDTO';

export default interface IUsersRepositorory {
  findById(id: string): Promise<Subject | undefined>;
  findByDescription(description: string): Promise<Subject[] | undefined>;
  create(data: ICreateTeacherDTO): Promise<Subject>;
  save(subject: Subject): Promise<Subject>;
}
