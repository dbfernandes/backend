import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { Routes } from './routes';

createConnection()
  .then(async (connection) => {
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
          res.header(
            'Access-Control-Allow-Methods',
            'GET,POST,PUT,HEAD,DELETE,OPTIONS'
          );
          res.header(
            'Access-Control-Allow-Headers',
            'content-Type,x-requested-with'
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // start express server
    app.listen(3010);

    console.log(
      'Express server has started on port 3010. Open http://localhost:3010/disciplines to see results.'
    );
  })
  .catch((error) => console.log(error));
