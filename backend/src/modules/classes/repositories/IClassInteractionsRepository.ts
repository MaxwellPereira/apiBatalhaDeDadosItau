import ClassInteraction from '@modules/classes/infra/typeorm/entities/ClassInteraction';
import ICreateClassInteractionDTO from '@modules/classes/dtos/ICreateClassInteractionDTO';

export default interface IClassesRepositorory {
  findInteraction(
    class_Id: string,
    user_id: string,
  ): Promise<ClassInteraction | undefined>;
  create(data: ICreateClassInteractionDTO): Promise<ClassInteraction>;
  updateScore(
    class_id: string,
    user_id: string,
    score: 0 | 1 | -1,
  ): Promise<void>;
  updateComment(
    class_id: string,
    user_id: string,
    comment: string,
  ): Promise<void>;
  save(mClass: ClassInteraction): Promise<ClassInteraction>;
}
