import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Ticket, TicketRelations, Parqueadero, Vehiculo} from '../models';
import {ParqueaderoRepository} from './parqueadero.repository';
import {VehiculoRepository} from './vehiculo.repository';

export class TicketRepository extends DefaultCrudRepository<
  Ticket,
  typeof Ticket.prototype.id,
  TicketRelations
> {

  public readonly parqueadero: BelongsToAccessor<Parqueadero, typeof Ticket.prototype.id>;

  public readonly vehiculo: BelongsToAccessor<Vehiculo, typeof Ticket.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ParqueaderoRepository') protected parqueaderoRepositoryGetter: Getter<ParqueaderoRepository>, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>,
  ) {
    super(Ticket, dataSource);
    this.vehiculo = this.createBelongsToAccessorFor('vehiculo', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculo', this.vehiculo.inclusionResolver);
    this.parqueadero = this.createBelongsToAccessorFor('parqueadero', parqueaderoRepositoryGetter,);
    this.registerInclusionResolver('parqueadero', this.parqueadero.inclusionResolver);
  }
}
