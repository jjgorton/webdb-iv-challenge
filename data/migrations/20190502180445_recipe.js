exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipe', (tbl) => {
		tbl.increments();
		tbl.string('name', 128).notNullable().unique();
		tbl.string('instructions', 128);
		tbl.string('ingredients', 128);

		tbl
			.integer('dish_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('dish')
			.onDelete('RESTRICT')
			.onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipe');
};
