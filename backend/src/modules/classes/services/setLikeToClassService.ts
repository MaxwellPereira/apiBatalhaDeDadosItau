import IClassInteractionsRepository from '@modules/classes/repositories/IClassInteractionsRepository';
import IClassesRepository from '@modules/classes/repositories/IClassesRepository';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  classId: string;
  userId: string;
}

@injectable()
export default class setLikeToClassService {
  constructor(
    @inject('ClassesReposity')
    private classesReposity: IClassesReposity,

    @inject('ClassInteractionRepository')
    private classInterectionsrepository: IClassInteractionsRepository,
  ) {}

  public async execute({ classId, userId }: IRequest): Promise<void> {
    await tags.map(tag => this.classTagRepository.remove(tag, classId));
  }
}
