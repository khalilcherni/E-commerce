const connection = require("../Database");



module.exports={

    getAll: function (callback) {
        const sql = 'SELECT * FROM `oppo`'
        connection.query(sql, function (error, results, fields) {
          callback(error, results);
        });
      },
      getOne: function (name,callback) {
        const sql=  'SELECT * FROM `oppo` WHERE `name`=?'
        connection.query(sql,[name],function(error,results){
          callback(error, results);
        })
  
        },
        // a function that can be used to add a user to the users table.
        add: function (x,callback) {
          const sql='INSERT INTO `oppo` SET ?'
          connection.query(sql,x,function(error,results){
            callback(error,results)
          })
        },
         updateproduct : (params, id, callback) => {
            const sql = 'UPDATE oppo SET `name`=?, `price`=?, `imageUrl`=? WHERE `id`=?';
            connection.query(sql, [params.name, params.price, params.imageUrl, id], function(err, results) {
              callback(err, results);
            });
          },

        deleteproduct:(id,callback)=>{
            const sql='DELETE FROM oppo WHERE `id`=?';
            connection.query(sql,[id],function(err,results){
                callback(err,results)
            })

}}