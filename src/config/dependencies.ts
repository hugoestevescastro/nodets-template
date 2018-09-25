import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as session from 'express-session';

export class Dependencies {

    constructor(app) {
        // support application/json type post data
        app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        app.use(express.static('public'));
        app.use(cors());
        app.use(cookieParser("random_environment_variable"));
        app.use(session({
            secret: "random_environment_variable",
            saveUninitialized: true,
            resave: true
        }));
    }


}