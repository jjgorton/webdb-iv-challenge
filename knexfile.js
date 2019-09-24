// Update with your config settings.

module.exports = {
	development : {
		client           : 'sqlite3',
		useNullAsDefault : true,
		connection       : {
			filename : './data/cookBook.db3' // the folder will be created when we run the migrations
		},
		migrations       : {
			directory : './data/migrations'
		},
		seeds            : {
			directory : './data/seeds'
		},

		// gotcha: SQLite dos not enforce FKs by default!!
		pool             : {
			afterCreate : (connection, done) => {
				connection.run('PRAGMA foreign_keys = ON', done);
			}
		}
	}
};
