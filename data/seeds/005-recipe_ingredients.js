
exports.seed = function(knex, Promise) {

      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, measurement_id: 1, quantity: 1},
        { recipe_id: 2, ingredient_id: 2, measurement_id: 2, quantity: 4},
        { recipe_id: 3, ingredient_id: 3, measurement_id: 3, quantity: 7},
      ]);
};
