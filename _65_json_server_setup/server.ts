import jsonServer from "json-server";
import { RequestHandler } from "express";

const server = jsonServer.create();
const router = jsonServer.router("./database/database.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

const customMiddleware: RequestHandler = (_req, res, next) => {
  console.log("Request received");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
};

server.use(customMiddleware);
server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});
