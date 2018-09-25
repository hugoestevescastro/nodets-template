import * as express from 'express';

import { Routing } from './routing';
import { Dependencies } from './dependencies';

class App {

    public app: express.Application;
    private routing: Routing;
    private dependencies: Dependencies;

    constructor() {
        this.app = express();
        this.routing = new Routing(this.app);
        this.dependencies = new Dependencies(this.app);   
    }

}

export default new App().app;