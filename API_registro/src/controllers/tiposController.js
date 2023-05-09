//Controller para la tabla tipos con los campos id, nombre_tipos
//
const mysqlConnection = require("../database");
const controller = {};

//Select
controller.list = (req, res) => {

    mysqlConnection.query('SELECT * FROM tipos', (err, rows, fields) => {
        if (!err) {
            res.json({
                status_code: 202,
                message: "Listado",
                tipos: rows,
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

    mysqlConnection.query('INSERT INTO tipos SET ?', [req.body], (err, rows) => {
        if (!err) {
            res.json({
                status_code: 202,
                message: "Registro agregado",
                tipos: rows,
            });
            console.log(rows);
        } else {
            res.json({
                code: 500,
                error: true,
                message: err,
            });
        }
    }
    );
};

//Update
controller.update = (req, res) => {

    mysqlConnection.query('UPDATE tipos SET ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
        if (!err) {
            res.json({
                status_code: 202,
                message: "Registro actualizado",
                tipos: rows,
            });
            console.log(rows);
        } else {
            res.json({
                code: 500,
                error: true,
                message: err,
            });
        }
    }
    );
};

//Delete
controller.delete = (req, res) => {

    mysqlConnection.query('DELETE FROM tipos WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.json({
                status_code: 202,
                message: "Registro eliminado",
                tipos: rows,
            });
            console.log(rows);
        } else {
            res.json({
                code: 500,
                error: true,
                message: err,
            });
        }
    }
    );
};
