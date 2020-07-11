import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { year, month, day } = req.body;
    const { provider_id } = req.params;

    const listProviderDayAvailabilityService = container.resolve(
      ListProviderDayAvailabilityService,
    );

    const availability = await listProviderDayAvailabilityService.execute({
      provider_id,
      month,
      year,
      day,
    });

    return res.json(availability);
  }
}
