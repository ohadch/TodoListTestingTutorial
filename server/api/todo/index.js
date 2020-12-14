const {Router} = require("express")
const Controller = require("./controller");

const router = Router();

router.route("/")
    .get(Controller.getAll)
    .post(Controller.post)

router.route("/:id")
    .get(Controller.getOne)
    .put(Controller.put)
    .delete(Controller.delete_)

module.exports = router;