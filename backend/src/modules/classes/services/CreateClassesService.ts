import MClass from '@modules/classes/infra/typeorm/entities/MClass';
import ClassTag from '@modules/classes/infra/typeorm/entities/ClassTag';
import IClassesRepositorory from '@modules/classes/repositories/IClassesRepository';
import { injectable, inject } from 'tsyringe';

type ITags = Array<{
  classTag: ClassTag;
}>;

interface IRequest {
  title: string;
  subject: string;
  description: string;
  shortDescription: string;
  urlAdress: string;
  tags?: ITags;
}

@injectable()
export default class CreateClassesService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepositorory,
  ) {}

  public async execute({
    description,
    title,
    urlAdress,
    shortDescription,
    subject,
    tags,
  }: IRequest): Promise<MClass> {
    const mClass = await this.classesRepository.create({
      description,
      subject,
      title,
      shortDescription,
      urlAdress,
      tags,
    });

    return mClass;
  }
}
