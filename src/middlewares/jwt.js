const jwt = require('jsonwebtoken');

exports.jwtAuth = (req, res, next) => {
   const token = req.headers['x-access-token'];

   jwt.verify(token, process.env.SEC, (err, decoded) => {
      if(err) return res.status(401).json({ status: 'unauthorized token' }).end();
      req.body.user_id = decoded.user_id;
      next();
   });
};

