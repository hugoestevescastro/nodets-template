import { Request, Response } from 'express';

export class TestController{

    public getRoot(req: Request, res: Response) {                
        res.status(200).send({
            message: '/GET @test'
        })
    }
    public postRoot(req: Request, res: Response) {                
        res.status(200).send({
            message: '/POST @test'
        })
    }
    public getSubpath(req: Request, res: Response) {                
        res.status(200).send({
            message: '/GET @test/subpath'
        })
    }
    public postSubpath(req: Request, res: Response) {                
        res.status(200).send({
            message: '/POST @test/subpath'
        })
    }

    
}