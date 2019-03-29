const db = require('./data/dbConfig.js');

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}

function getDishes() {
    return db('dishes')
}

function addDish(dish) {
    return db('dishes')
        .insert({ dish })
}

function getDish(id) {
    return db('dishes')
        .join('recipes', 'recipes.id', '=', 'dishes.recipe_id' )
        .where({ 'recipes.id': id })
}

function getRecipes() {
    return db('recipes')
        .join('dishes', 'dishes.id', '=', 'recipes.dish_id')
        .select('recipe_name', 'dish_name')
}

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe)
}