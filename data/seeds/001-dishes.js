
exports.seed = function(knex, Promise) {
      return knex('table_name').insert([
        { name: 'Chicken Pot Pie' },
        { name: 'Lasagna' },
        { name: 'Beef Stew' }
      ]);
};
