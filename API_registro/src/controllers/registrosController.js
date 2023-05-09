//Controller para la tabla registros con campos id, nombre_id, tipo_id, descripcion, fecha, empresa_id
const mysqlConnection = require("../database");
const controller = {};

//Select
controller.list = (req, res) => {
mysqlConnection.query('SELECT * FROM registros', (err, rows, fields) => {
if (!err) {
res.json({
status_code: 202,
message: "Listado",
registros: rows,
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

//Insert campos: nombre, cantidad, precio, subotal, iva, total
controller.save = (req, res) => {
const { nombre_id, tipo_id, descripcion, fecha, empresa_id} = req.body;
const query = `INSERT INTO registros (nombre_id, tipo_id, descripcion, fecha, empresa_id)
VALUES ('${nombre_id}', '${tipo_id}', '${descripcion}', '${fecha}', '${empresa_id}')`;
mysqlConnection.query(query, (err, rows) => {
if (!err) {
res.json({
status_code: 202,
message: "Registro agregado",
registros: rows,
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
const { nombre_id, tipo_id, descripcion, fecha, empresa_id} = req.body;
const query = `UPDATE registros SET nombre_id = '${nombre_id}', tipo_id = '${tipo_id}', descripcion = '${descripcion}', fecha = '${fecha}', empresa_id = '${empresa_id}' WHERE id = '${id}'`;
mysqlConnection.query(query, (err, rows) => {
if (!err) {
res.json({
status_code: 202,
message: "Registro actualizado",
registros: rows,
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

