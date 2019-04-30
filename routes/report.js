var bodyParser = require('body-parser');
var querystring = require('querystring');
var con = require('./connect-db.js'); /*เชื่อมต่อฐานข้อมูล*/

module.exports = function(app) {

  app.get('/report', function(req, res) {
    var userinfo = req.user;
    var mses = req.query.valid;

    res.render('pages/report', {
      userinfo: userinfo,
      messages: mses,
    });

  });


  app.get("/report/allofyears", function(req, res) {
    var sql = "SELECT distinct grants_Years FROM project.grants order by grants_Years;SELECT  count(*) as count FROM project.grants WHERE grants_Years is not null GROUP BY grants_Years order by grants_Years";
    console.log(sql);
    con.query(sql, function(err, rows) {
      if (err) throw err;

      console.log(rows[0]);
      console.log(rows[1]);

      res.send(rows);
    });
  });



}