import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotEmailPasswordService from '@modules/users/services/SendForgotEmailPasswordService';

export default class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendForgotEmailPassword = container.resolve(
      SendForgotEmailPasswordService,
    );

    await sendForgotEmailPassword.execute({
      email,
    });

    return res.status(204).json();
  }
}
