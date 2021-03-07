import { Request, Response } from "express";
import swaggerUi = require('swagger-ui-express');
import fs = require('fs');
import { UserController } from "../controllers/user.controller";


export class Routes {
  public userController: UserController = new UserController()
  private swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
  private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
  private swaggerDocument = JSON.parse(this.swaggerData);

  public routes(app): void {


    const basePath: string = "/api/v1/"

    app.use(`${basePath}docs`, swaggerUi.serve,
      swaggerUi.setup(this.swaggerDocument, null, null, null));

    app.route(`${basePath}greet`).get(this.userController.greetMe);

    app.use("*", (_, res: Response) => {
      res.status(404).send("404 Not Found :)!");
    });
  }
}