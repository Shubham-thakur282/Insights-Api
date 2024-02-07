const Express = require("express");
const { dashboard } = require("../controller/controller");

const router = Express.Router();

router.route("/").get(dashboard);

module.exports = router;