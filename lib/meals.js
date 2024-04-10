import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    //set WaitTime
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  //throw new Error('Loading meals failed');
  // Execute the query to select all meals
  return db.prepare('SELECT * FROM meals').all();
}

export  function getMealProfile(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
