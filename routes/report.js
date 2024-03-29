var bodyParser = require('body-parser');
var querystring = require('querystring');
var con = require('./connect-db.js'); /*เชื่อมต่อฐานข้อมูล*/
var role = require('./role.js');
module.exports = function(app) {

  app.get('/report',role.requireRole("admin","board"), function(req, res) {
    var userinfo = req.user;
    var mses = req.query.valid;

    res.render('pages/report', {
      userinfo: userinfo,
      messages: mses,
    });

  });

  app.get('/report-researcher',role.requireRole("admin","board"), function(req, res) {
    var userinfo = req.user;
    var mses = req.query.valid;

    res.render('pages/report-researcher', {
      userinfo: userinfo,
      messages: mses,
    });
  });

  app.get('/report-project',role.requireRole("admin","board"), function(req, res) {
    var userinfo = req.user;
    var mses = req.query.valid;

    res.render('pages/report-project', {
      userinfo: userinfo,
      messages: mses,
    });

  });

  app.get('/report-grants',role.requireRole("admin","board"), function(req, res) {
    var userinfo = req.user;
    var mses = req.query.valid;

    res.render('pages/report-grants', {
      userinfo: userinfo,
      messages: mses,
    });

  });

  /*ขอข้อมูล*/
  app.get("/report/allofyears", function(req, res) {
    var sql = "SELECT distinct grants_Years FROM project.grants  where grants_Type='ทุนภายใน'order by grants_Years;SELECT grants_Years, COUNT(*) c FROM project.grants  where grants_Type='ทุนภายใน'GROUP BY grants_Years HAVING c > 0 order by grants_Years;SELECT distinct grants_Years FROM project.grants  where grants_Type='ทุนภายนอก'order by grants_Years;SELECT grants_Years, COUNT(*) c FROM project.grants  where grants_Type='ทุนภายนอก'GROUP BY grants_Years HAVING c > 0 order by grants_Years;";
    console.log(sql);
    con.query(sql, function(err, rows) {
      if (err) throw err;

      console.log(rows[0]);
      console.log(rows[1]);

      res.send(rows);
    });
  });
}
