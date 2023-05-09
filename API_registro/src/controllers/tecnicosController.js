//Controller para la tabla tecnicos con los campos id, nombre_tecnicos, apellidos

const mysqlConnection = require("../database");
const controller = {};

//Select
controller.list = (req, res) => {
    mysqlConnection.query('SELECT * FROM tecnicos', (err, rows, fields) => {
        if (!err) {
            res.json({
                status_code: 202,
                message: "Listado",
                tecnicos: rows,
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
    const { nombre_tecnicos, apellidos } = req.body;
    const query = `INSERT INTO tecnicos (nombre_tecnicos, apellidos)
VALUES ('${nombre_tecnicos}', '${apellidos}')`;
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            res.json({
                status_code: 202,
                message: "Registro agregado",
                tecnicos: rows,
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
    const { nombre_tecnicos, apellidos } = req.body;
    const query = `UPDATE tecnicos SET nombre_tecnicos = '${nombre_tecnicos}', apellidos = '${apellidos}' WHERE id = '${id}'`;
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            res.json({
                status_code: 202,
                message: "Registro actualizado",
                tecnicos: rows,
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
    const query = `DELETE FROM tecnicos WHERE id = '${id}'`;
    mysqlConnection.query(query, (err, rows) => {
        if (!err) {
            res.json({
                status_code: 202,
                message: "Registro eliminado",
                tecnicos: rows,
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





