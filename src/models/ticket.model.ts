import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Parqueadero} from './parqueadero.model';
import {Vehiculo} from './vehiculo.model';

@model()
export class Ticket extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  hora_ingreso: string;

  @property({
    type: 'date',
    required: true,
  })
  hora_salida: string;

  @property({
    type: 'number',
    required: true,
  })
  valor_total: number;

  @belongsTo(() => Parqueadero)
  parqueaderoId: string;

  @belongsTo(() => Vehiculo)
  vehiculoId: string;

  constructor(data?: Partial<Ticket>) {
    super(data);
  }
}

export interface TicketRelations {
  // describe navigational properties here
}

export type TicketWithRelations = Ticket & TicketRelations;
