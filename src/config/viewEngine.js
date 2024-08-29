import path from "path";
import express from "express";

export const configViewEngine = (app) => {
  app.set("views", path.join("./src/", "views"));
  app.set("view engine", "ejs");

  app.use(express.static(path.join("./src/", "public")));
};
