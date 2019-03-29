
exports.seed = function(knex, Promise) {

      return knex('ingredients').insert([
        { ingredient_name: 'eggs' },
        { ingredient_name: 'salt' },
        { ingredient_name: 'butter' }
      ]);
};
