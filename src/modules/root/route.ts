import { Request, Response, NextFunction } from 'express';
import { RootController } from './controller';

export class RootRoute { 
    
    private controller: RootController = new RootController();

    constructor(app) {
        this.configureRoot(app);
    }
    configureRoot(app) {
        app.route('/')
            .get((req: Request, res: Response, next: NextFunction) => {            
                this.controller.get(req,res);
            })
            .post((req: Request, res: Response, next: NextFunction) => {            
                this.controller.post(req,res);
            }) 
    }
}