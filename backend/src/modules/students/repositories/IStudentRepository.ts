import Student from '@modules/students/infra/typeorm/entities/Student';
import ICreateStudentDTO from '@modules/students/dtos/ICreateStudentDTO';

export default interface IUsersRepositorory {
  findById(id: string): Promise<Student | undefined>;
  findByIdentityStudent(email: string): Promise<Student | undefined>;
  findByCoordanatorId(coordenator_id: string): Promise<Student[] | undefined>;
  create(data: ICreateStudentDTO): Promise<Student>;
  save(user: Student): Promise<Student>;
}
