
exports.seed = function(knex, Promise) {
      return knex('dishes').insert([
        { dish_name: 'Chicken Pot Pie' },//1
        { dish_name: 'Lasagna' },//2
        { dish_name: 'Beef Stew' }//3
      ]);
};
