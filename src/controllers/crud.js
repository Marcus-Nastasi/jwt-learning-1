const mysql = require('../models/db');

exports.readAll = (req, res) => {
   mysql.query(
      'SELECT * FROM todos',
      function(err, results, fields) {
         if(err) throw new Error('Read all error');
         return res.status(200).json(results);
      }
   );
};

