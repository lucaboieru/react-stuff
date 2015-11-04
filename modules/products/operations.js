var db = [
	{
		id: "1",
		title: "Mazda Miata NA",
		image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Mazda_mx-5_na_europe.jpg",
		description: "The MX5's first generation, the NA, sold over 400,000 units from 1989 to 1997 – with a 1.6 L (98 cu in) straight-4 engine to 1993, a 1.8 L (110 cu in) engine thereafter (with a DE-tuned 1.6 as a budget option in some markets)",
		models: [
			{
				id: "11",
				type: "NA 1.6",
				price: 2000,
				inventory: 1
			},
			{
				id: "12",
				type: "NA 1.8",
				price: 3000,
				inventory: 3
			}
		]
	},
	{
		id: "2",
		title: "Mazda Miata NC",
		image: "http://topalwaysdown.files.wordpress.com/2012/06/ag_07miata_frontright_td.jpg",
		description: "The third generation (NC) model was launched in 2005 (for the 2006 model year)",
		models: [
			{
				id: "21",
				type: "NC 1.8",
				price: 10000,
				inventory: 4
			},
			{
				id: "22",
				type: "NC 2.0",
				price: 12000,
				inventory: 2
			}
		]
	},
	{
		id: "3",
		title: "Nissan S13",
		image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Red_240SX_II.jpg",
		description: "The 240SX is a sports car that was introduced to the North American market by Nissan in 1988 for the following model year.",
		models: [
			{
				id: "31",
				type: "240SX 2.4",
				price: 8000,
				inventory: 2
			}
		]
	},
	{
		id: "4",
		title: "Toyota Supra Mk4",
		image: "http://i.kinja-img.com/gawker-media/image/upload/s--UgzE6Bri--/c_fit,fl_progressive,q_80,w_636/isg0whn8lwgyjnd6zlqx.jpg",
		description: "The Supra is a sports car that was introduced to the North American market by Nissan in 1988 for the following model year.",
		models: [
			{
				id: "41",
				type: "2JZ 3.0 TT",
				price: 16000,
				inventory: 1
			},
			{
				id: "42",
				type: "2JZ 3.0",
				price: 10000,
				inventory: 3
			}
		]
	}
];

exports.getProducts = function (link) {
	link.res.writeHead(200);
    link.res.end(JSON.stringify(db));
};

exports.getProduct = function (link) {
	var id = link.data.id;

	db.forEach(function (item, index) {
		if (item.id === id) {
			link.res.writeHead(200);
	    	link.res.end(JSON.stringify(item));
	    }
	});
};
