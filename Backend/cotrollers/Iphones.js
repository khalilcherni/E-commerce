const iphones =require ("../models/iphone.js")



module.exports = {
   
    getAllphones: function(req, res) {
    iphones.getAll(function(err,results){
        if(err){
            res.status(500).send(err)
        }
else{
    res.json(results)
}
    })
    },
    addUser: function(req, res) {
        var x=req.body
        iphones.add(x,function(err,results){
           if(err){
            res.status(500).send(err)
           
           }
           else{
            res.json(results)
           }
        })
        },
   
        getOneUser: function(req, res) {
        var w=req.params.name
        iphones.getOne(w,(err,results)=>{
            if(err)
                res.status(500).send(err)
            
        
            else
                res.status(201).json(results)
            
        })
    },
    update:(req, res) => {
        var x = req.body
        var y = req.params.id
      
        iphones.updateproduct(x, y, function (err, results) {
          if (err) {
            res.status(500).send(err)
          } else {
            res.json(results)
          }
        });
        },
        
        fassakh:(req, res) => {
            var id= req.params.id
          
            iphones.deleteproduct( id, function (err, results) {
              if (err) {
                res.status(500).send(err)
              } else {
                res.json(results)
              }
            });
            },
}