const express = require("express");
const cTable = require('console.table');

const port = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extende: false}))
app.use(express.json());