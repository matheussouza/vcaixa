class App {

  constructor(express, middleware, routes) {
    this.server = express();
    this.server.use(express.json());
    this.bootstrap(middleware, routes);
  }

  bootstrap(middleware, routes) {
    this.server.use(middleware);
    routes.forEach(m => this.server.use(m(middleware)));
  }

}

module.exports = (express, middleware, routes) => new App(express, middleware, routes);
