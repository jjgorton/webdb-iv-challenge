const db = require('../data/dbConfig');

module.exports = {
	getDishes,
	addDish
};

function getDishes() {
	return db('dish');
}

function addDish(dish) {
	return db('dish').insert(dish, 'id').then(([ id ]) => {
		return id;
	});
}
