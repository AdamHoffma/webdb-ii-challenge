
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()
      tbl 
        .integer(VIN)
        .unique()
        .notNullable()
    tbl
        .string("make")        
        .notNullable()
    tbl
        .string("model")        
        .notNullable()
    tbl
        .integer(mileage)
        .notNullable()
    tbl
        .string("Transmission Type")  
    tbl
        .string("title")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
