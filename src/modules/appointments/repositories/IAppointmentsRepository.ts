import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

import ICreateAppointmenteDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmenteDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
