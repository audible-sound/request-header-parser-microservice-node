class ApiController {
  static getData(req, res) {
    try {
        res.status(200).send({
            ipaddress: req.ip,
            language: req.headers["accept-language"],
            software: req.headers["user-agent"]
        })
    } catch (error) {
      res.status(500).send({
        error,
      });
    }
  }
}
module.exports = ApiController;
