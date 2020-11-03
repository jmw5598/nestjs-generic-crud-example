import { Body, Delete, Get, Param, Put } from '@nestjs/common';
import { ICrudService } from '../services/crud-service.interface';

export abstract class AbstractCrudController<T, ID> {
  constructor(
    protected _service: ICrudService<T, ID>
  ) {}

  @Get()
  public async getAllEntities(): Promise<T[]> {
    try {
      return this._service.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  public async getEntityById(@Param('id') id: ID): Promise<T> {
    try {
      return this._service.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  public async updateEntityById(@Param('id') id: ID, @Body() entity: T): Promise<T> {
    try {
      return this._service.update(id, entity); 
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  public async deleteEntityById(@Param('id') id: ID): Promise<T> {
    try {
      return this._service.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
