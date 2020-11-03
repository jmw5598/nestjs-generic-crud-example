import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ICrudService } from './crud-service.interface';

export abstract class AbstractCrudService<T, ID> implements ICrudService<T, ID> {
  constructor(
    protected _repository: Repository<T>
  ) {}

  public async findById(id: ID): Promise<T> {
    const e: T = await this._repository.findOne(id);
    if (!e) throw new NotFoundException();
    return this._repository.findOne(id);
  }

  public async findAll(): Promise<T[]> {
    return this._repository.find();
  }

  public async update(id: ID, entity: T): Promise<T> {
    const e: T = await this._repository.findOne(id);
    if (!e) throw new NotFoundException();
    Object.assign(e, entity);
    return this._repository.save(e);
  }

  public async delete(id: ID): Promise<T> { 
    const e: T = await this._repository.findOne(id);
    if (!e) throw new NotFoundException()
    return e;
  }

  public create(entity: T): Promise<T> {
    const e: T = this._repository.create({
      ...entity
    });
    return this._repository.save(e);
  }
}