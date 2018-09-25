import { Request, Response, NextFunction } from 'express';
import { TestController } from './controller';

export class TestRoute { 
    
    private controller: TestController = new TestController();

    constructor(app) {
        this.configureRoot(app);
        this.configureSubpath(app);
    }

    configureRoot(app) {
        app.route('/test')
            .get((req: Request, res: Response, next: NextFunction) => {            
                this.controller.getRoot(req,res);
            })
            .post((req: Request, res: Response, next: NextFunction) => {            
                this.controller.postRoot(req,res);
            }) 
    }
    configureSubpath(app) {
        app.route('/test/subpath')
            .get((req: Request, res: Response, next: NextFunction) => {            
                this.controller.getSubpath(req,res);
            })
            .post((req: Request, res: Response, next: NextFunction) => {            
                this.controller.postSubpath(req,res);
            }) 
    }
}