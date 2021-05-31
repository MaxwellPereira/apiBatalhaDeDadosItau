import IClassTagsRepository from '@modules/classes/repositories/IClassTagsRepository';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  classId: string;
  tags: string[];
}

@injectable()
export default class AddTagsClassService {
  constructor(
    @inject('ClassTagRepository')
    private classTagRepository: IClassTagsRepository,
  ) {}

  public async execute({ classId, tags }: IRequest): Promise<void> {
    await tags.map(tag => this.classTagRepository.remove(tag, classId));
  }
}
