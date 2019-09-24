exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipe-ingredients').truncate().then(function() {
		// Inserts seed entries
		return knex('recipe-ingredients').insert([
			{ name: 'flour', quantity: 3, recipe_id: '1', ingredients_id: '1' },
			{ name: 'eggs', quantity: 2, recipe_id: '1', ingredients_id: '2' },
			{ name: 'salt', quantity: 5, recipe_id: '1', ingredients_id: '3' },

			{ name: 'flour', quantity: 3, recipe_id: '2', ingredients_id: '1' },
			{ name: 'eggs', quantity: 2, recipe_id: '2', ingredients_id: '2' },
			{ name: 'salt', quantity: 5, recipe_id: '2', ingredients_id: '3' },

			{ name: 'flour', quantity: 3, recipe_id: '3', ingredients_id: '1' },
			{ name: 'eggs', quantity: 2, recipe_id: '3', ingredients_id: '2' },
			{ name: 'salt', quantity: 5, recipe_id: '3', ingredients_id: '3' }
		]);
	});
};
