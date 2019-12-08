const {
	item,
	brand,
	Sequelize
} = require("./../models");

const Op = Sequelize.Op;

let self = {};

self.getAll = async (req,res) => {
	try{
		let data = await item.findAll({
			attributes:["id","name","brand_id","price","stock"],
			include:[
				{
					model:brand,
					as:'brand',
					attributes:["id","name"]
				}
			]
		});
		return res.json({
			status:"ok",
			data:data
		})
	}catch(error){
		res.status(500).json({
			status:"error",
			data:error
		})
	}
}

self.get = async (req,res) => {
	try{
		let id = req.params.id;
		let data = await item.findOne({
			attributes:["id","name","brand_id","price","stock"],
			include:[
				{
					model:brand,
					as:'brand',
					attributes:["id","name"]
				}
			],
			where:{
				id:id
			}
		});
		return res.json({
			status:"ok",
			data:data
		})
	}catch(error){
		res.status(500).json({
			status:"error",
			data:error
		})
	}
}

self.search = async (req,res) => {
	try{
		let text = req.query.text;
		let data = await item.findAll({
			attributes:["id","name","brand_id","price","stock"],
			include:[
				{
					model:brand,
					as:'brand',
					attributes:["id","name"]
				}
			],
			where:{
				[Op.or]:{
					name:{
						[Op.like]:"%"+text+"%"
					},
					//search by name of brands
					'$brand.name$':{
						[Op.like]:"%"+text+"%"
					}
				}
			}
		});
		return res.json({
			status:"ok",
			data:data
		})
	}catch(error){
		res.status(500).json({
			status:"error",
			data:error
		})
	}
}

self.save = async (req,res) => {
	try{
		let body = req.body;
		let data = await item.create(body);
		return res.json({
			status:"ok",
			data:data
		})
	}catch(error){
		res.status(500).json({
			status:"error",
			data:error
		})
	}
}

self.update = async (req,res) => {
	try{
		let id = req.params.id;
		let body = req.body;
		let data = await item.update(body,{
			where:{
				id:id
			}
		});
		return res.json({
			status:"ok",
			data:data
		})
	}catch(error){
		res.status(500).json({
			status:"error",
			data:error
		})
	}
}

self.delete = async (req,res) => {
	try{
		let id = req.params.id;
		let data = await item.destroy({
			where:{
				id:id
			}
		});
		return res.json({
			status:"ok",
			data:data
		})
	}catch(error){
		res.status(500).json({
			status:"error",
			data:error
		})
	}
}


module.exports = self;