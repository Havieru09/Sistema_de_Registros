//Controller para la tabla empresas con campos id, nombre_empresas
const mysqlConnection = require("../database");
const controller = {};

//Select
controller.list = (req, res) => {
mysqlConnection.query('SELECT * FROM empresas', (err, rows, fields) => {
if (!err) {
res.json({
status_code: 202,
message: "Listado",
empresas: rows,
});
console.log(rows);
} else {
res.json({
code: 500,
error: true,
message: err,
});
}
});
};

//Insert campos: nombre_empresas
controller.save = (req, res) => {
const { nombre_empresas} = req.body;
const query = `INSERT INTO empresas (nombre_empresas)
VALUES ('${nombre_empresas}')`;
mysqlConnection.query(query, (err, rows) => {
if (!err) {
res.json({
status_code: 202,
message: "Empresa agregada",
empresas: rows,
});
console.log(rows);
} else {
res.json({
code: 500,
error: true,
message: err,
});
}
});
};

//Update
controller.update = (req, res) => {
const { id } = req.params;
const { nombre_empresas} = req.body;
const query = `UPDATE empresas SET nombre_empresas = '${nombre_empresas}' WHERE id = '${id}'`;
mysqlConnection.query(query, (err, rows) => {
if (!err) {
res.json({
status_code: 202,
message: "Empresa actualizada",
empresas: rows,
});
console.log(rows);
} else {
res.json({
code: 500,
error: true,
message: err,
});
}
});
};

//Delete
controller.delete = (req, res) => {
const { id } = req.params;
const query = `DELETE FROM empresas WHERE id = '${id}'`;
mysqlConnection.query(query, (err, rows) => {
if (!err) {
res.json({
status_code: 202,
message: "Empresa eliminada",
empresas: rows,
});
console.log(rows);
} else {
res.json({
code: 500,
error: true,
message: err,
});
}
});
};

module.exports = controller;