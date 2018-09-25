import { Request, Response } from 'express';

export class RootController{

    public get(req: Request, res: Response) {                
        res.status(200).send({
            message: '/GET @root'
        })
    }
    public post(req: Request, res: Response) {                
        res.status(200).send({
            message: '/POST @root'
        })
    }

    
}