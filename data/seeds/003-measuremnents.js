
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('measurements').insert([
        { measurement_name: 'large brown' },
        { measurement_name: 'cup of' },
        { measurement_name: 'tbls of' }
      ]);
};
