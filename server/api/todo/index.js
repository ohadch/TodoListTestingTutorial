const {Router} = require("express")
const Controller = require("./controller");

const router = Router();

router.route("/:id?")
    .get(Controller.get)
    .post(Controller.post)
    .put(Controller.put)
    .delete(Controller.delete_)

module.exports = router;