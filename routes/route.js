
const brand_ctrl = require("./../controllers/brand_ctrl");
const item_ctrl = require("./../controllers/item_ctrl");

module.exports = function(express) {
	const route = express.Router();

	//brands route
	route.get("/brand",brand_ctrl.getAll);
	route.get("/brand/:id",brand_ctrl.get);
	route.get("/brand_search",brand_ctrl.search);
	route.post("/brand",brand_ctrl.save);
	route.put("/brand/:id",brand_ctrl.update);
	route.delete("/brand/:id",brand_ctrl.delete);
	route.get("/brand_with_items",brand_ctrl.getWithItems);

	//items route
	route.get("/item",item_ctrl.getAll);
	route.get("/item/:id",item_ctrl.get);
	route.get("/item_search",item_ctrl.search);
	route.post("/item",item_ctrl.save);
	route.put("/item/:id",item_ctrl.update);
	route.delete("/item/:id",item_ctrl.delete);
	return route;
};