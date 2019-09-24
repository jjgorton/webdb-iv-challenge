exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipe-ingredients', (tbl) => {
		tbl.increments();
		tbl.string('name', 128).notNullable().unique();
		tbl.float('quantity');
		tbl.string('units', 10);

		tbl
			.integer('recipe_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('recipe')
			.onDelete('RESTRICT')
			.onUpdate('CASCADE');

		tbl
			.integer('ingredients_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('ingredients')
			.onDelete('RESTRICT')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipe-ingredients');
};
