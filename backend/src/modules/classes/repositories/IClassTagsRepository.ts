import ClassTag from '@modules/classes/infra/typeorm/entities/ClassTag';
import ICreateClassTagDTO from '@modules/classes/dtos/ICreateClassTagDTO';

export default interface IClassTag {
  findTags(class_Id: string): Promise<ClassTag[] | undefined>;
  create(data: ICreateClassTagDTO): Promise<ClassTag>;
  remove(tag: string, classId: string): Promise<void>;
  save(mClass: ClassTag): Promise<ClassTag>;
}
