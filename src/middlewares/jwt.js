const jwt = require('jsonwebtoken');

exports.jwtAuth = (req, res, next) => {
   req.headers['x-access-token'] = req.session.token;
   const token = req.session.token;

   jwt.verify(token, process.env.SEC, (err, decoded) => {
      if(err) return res.status(401).json({ status: 'invalid token' }).end();
      req.body.user_id = decoded.user_id;
      next();
   });
};

