import {Entity, model, property} from '@loopback/repository';

@model()
export class Parqueadero extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  num_parq: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo_parq: string;


  constructor(data?: Partial<Parqueadero>) {
    super(data);
  }
}

export interface ParqueaderoRelations {
  // describe navigational properties here
}

export type ParqueaderoWithRelations = Parqueadero & ParqueaderoRelations;
