const express = require("express")
const server = express()
const routes = require('./routes/index.ts')

server.use(express.json())

server.use("/", routes)

export = server;
