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