import MClass from '@modules/classes/infra/typeorm/entities/MClass';
import ICreateClassDTO from '@modules/classes/dtos/ICreateClassDTO';

export default interface IClassesRepositorory {
  findById(classId: string): Promise<MClass | undefined>;
  findBySubject(subject: string): Promise<MClass[]>;
  create(data: ICreateClassDTO): Promise<MClass>;
  save(mClass: MClass): Promise<MClass>;
  incrementRankAccess(classId: string): Promise<number>;
  incrementRankPoints(classId: string): Promise<number>;
  decrementRankAccess(classId: string): Promise<number>;
  decrementRankPoints(classId: string): Promise<number>;
}
