const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
   if(req.body.user == process.env.LOGUSER && req.body.password == process.env.PASS) {
      const token = jwt.sign({ user_id: process.env.USERID }, process.env.SEC, { expiresIn: '10m' });

      req.session.user_id = process.env.USERID;
      req.session.token = token;

      res.cookie("token", token, {
         httpOnly: true
      })

      return res.status(200).json({ user_id: req.session.user_id, loged: true, token });
   };
   
   return res.status(401).json({ status: 'unauthorized login' }).end();
};

