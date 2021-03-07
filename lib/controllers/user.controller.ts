import { RestResponse } from "../etc/controller.interface";
import { Request, Response } from "express";

export class UserController {
  /**
   * greetMe
  req: Request, res: Response   */
  public greetMe(req: Request,  res: Response) {
    const greet: RestResponse = {
      statusCode: 200,
      msg: "Hello Dunia!"
    }
    res.status(greet.statusCode).json(greet)
  }
}
