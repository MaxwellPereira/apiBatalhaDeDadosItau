import ClassTag from '../infra/typeorm/entities/ClassTag';

type ITags = Array<{
  classTag: ClassTag;
}>;

export default interface ICreateClassDTO {
  title: string;
  subject: string;
  description: string;
  shortDescription: string;
  urlAdress: string;
  tags?: ITags;
}
