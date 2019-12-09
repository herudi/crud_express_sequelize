
module.exports = function(express) {
	const route = express.Router();

	route.get("/",(req,res) => {
		return res.render("index");
	});
	route.get("/brand",(req,res) => {
		return res.render("brand");
	});
	route.get("/item",(req,res) => {
		return res.render("item");
	});
	
	return route;
};