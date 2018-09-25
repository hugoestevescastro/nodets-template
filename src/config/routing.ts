import { RootRoute } from '../modules/root/route';
import { TestRoute } from '../modules/test/route';

export class Routing { 
    constructor(app) {
        new RootRoute(app);
        new TestRoute(app);
    }
}