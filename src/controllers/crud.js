const mysql = require('../models/db');

exports.readAll = (req, res) => {
   mysql.query(
      'SELECT * FROM todos',
      function(err, results, fields) {
         if(err) throw new Error('Read all error');
         return res.status(200).json(results).end();
      }
   );
};

exports.readSingle = (req, res) => {
   mysql.query(
      'SELECT * FROM todos WHERE(id=?);', [ req.params.id ],
      function(err, results, fields) {
         if(err) throw new Error('Read single error');
         if(results.length == 0) return res.status(200).json({ Fields: "empty on this ID" }).end();
         return res.status(200).json(results).end();
      }
   );
};

exports.insert = (req, res) => {
   mysql.query(
      'INSERT INTO todos(description) VALUES(?)', [ req.body.description ],
      function(err, results, fields) {
         if(err) throw new Error('Insert error');
         return res.status(200).json({ status: 'value inserted successfuly' }).end();
      }
   );
};

exports.update = (req, res) => {
   mysql.query(
      'UPDATE todos SET description=? WHERE(id=?)', [ req.body.description, req.body.id ],
      function(err, results, fields) {
         if(err) throw new Error('Update error');
         return res.status(200).json({ status: 'updated successfuly' }).end();
      }
   );
};

exports.delete = (req, res) => {
   mysql.query(
      'DELETE FROM todos WHERE(id=?)', [ req.params.id ],
      function(err, results, fields) {
         if(err) throw new Error('Delete error');
         return res.status(200).json({ status: 'deleted successfuly' }).end();
      }
   );
};

