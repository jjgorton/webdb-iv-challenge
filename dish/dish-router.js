const router = require('express').Router();

const Dish = require('./dish-model');

router.get('/', (req, res) => {
	Dish.getDishes()
		.then((dish) => {
			res.status(200).json(dish);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
