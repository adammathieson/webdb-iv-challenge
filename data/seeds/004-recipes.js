
exports.seed = function(knex, Promise) {

      return knex('recipes').insert([
        { recipe_name: 'Grannys Famous', dish_id: 1 },//1
        { recipe_name: 'Four-cheese', dish_id: 2 },//2
        { recipe_name: 'Keto', dish_id: 3 }//3
      ]);
};
