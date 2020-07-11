import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmenService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;
    const { provider_id, date } = req.body;
    const parsedDate = parseISO(date);

    const createdAppointment = container.resolve(CreateAppointmenService);

    const appointment = await createdAppointment.execute({
      user_id,
      provider_id,
      date: parsedDate,
    });

    return res.json(appointment);
  }
}
