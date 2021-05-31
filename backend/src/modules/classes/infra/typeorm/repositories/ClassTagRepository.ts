import { getRepository, Repository } from 'typeorm';
import IClassTagRepository from '@modules/classes/repositories/IClassTagsRepository';
import ICreateClassTagDTO from '@modules/classes/dtos/ICreateClassTagDTO';
import ClassTag from '../entities/ClassTag';

class ClassTagRepository implements IClassTagRepository {
  private ormRepository: Repository<ClassTag>;

  constructor() {
    this.ormRepository = getRepository(ClassTag);
  }

  public async findTags(class_id: string): Promise<ClassTag[] | undefined> {
    const classTag = await this.ormRepository.find({
      where: { class_id },
    });
    return classTag;
  }

  public async create(data: ICreateClassTagDTO): Promise<ClassTag> {
    const classTag = await this.create(data);
    return classTag;
  }

  public async remove(tag: string, classId: string): Promise<void> {
    const classTag = await this.ormRepository.find({
      where: { class_id: classId, tag },
    });
    if (classTag) {
      await this.ormRepository.remove(classTag);
    }
  }

  public async save(classTag: ClassTag): Promise<ClassTag> {
    return this.ormRepository.save(classTag);
  }
}

export default ClassTagRepository;
