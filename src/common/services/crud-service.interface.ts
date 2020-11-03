export interface ICrudService<T, ID> {
  findById(id: ID): Promise<T>;
  findAll(): Promise<T[]>;
  update(id: ID, entity: T): Promise<T>;
  delete(id: ID): Promise<T>;
  create(entity: T): Promise<T>;
}