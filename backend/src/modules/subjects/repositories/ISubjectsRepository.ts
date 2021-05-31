import Subject from '@modules/subjects/infra/typeorm/entities/Subject';
import ICreateSubjectDTO from '@modules/subjects/dtos/ICreateSubjectDTO';

export default interface IUsersRepositorory {
  findById(id: string): Promise<Subject | undefined>;
  findByDescription(description: string): Promise<Subject[] | undefined>;
  create(data: ICreateSubjectDTO): Promise<Subject>;
  save(subject: Subject): Promise<Subject>;
}
