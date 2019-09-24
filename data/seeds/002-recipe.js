exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipe').truncate().then(function() {
		// Inserts seed entries
		return knex('recipe').insert([
			{ name: 'NYC pizza', instructions: 'mix together and bake at 350 for 30 min.', dish_id: 1 },
			{ name: 'italian pizza', instructions: 'mix together and bake at 350 for 30 min.', dish_id: 1 },
			{ name: 'Chicago pizza', instructions: 'mix together and bake at 350 for 30 min.', dish_id: 1 },
			{ name: 'italian bread', instructions: 'mix together and bake at 350 for 30 min.', dish_id: 2 },
			{ name: 'country bread', instructions: 'mix together and bake at 350 for 30 min.', dish_id: 2 },
			{ name: 'rye bread', instructions: 'mix together and bake at 350 for 30 min.', dish_id: 2 }
		]);
	});
};
