import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Ticket,
  Parqueadero,
} from '../models';
import {TicketRepository} from '../repositories';

export class TicketParqueaderoController {
  constructor(
    @repository(TicketRepository)
    public ticketRepository: TicketRepository,
  ) { }

  @get('/tickets/{id}/parqueadero', {
    responses: {
      '200': {
        description: 'Parqueadero belonging to Ticket',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Parqueadero)},
          },
        },
      },
    },
  })
  async getParqueadero(
    @param.path.string('id') id: typeof Ticket.prototype.id,
  ): Promise<Parqueadero> {
    return this.ticketRepository.parqueadero(id);
  }
}
