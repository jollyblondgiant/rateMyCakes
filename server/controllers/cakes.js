var     Cake = require('../models/cake'),
        mongoose = require('mongoose'),
        Cake = mongoose.model('Cake')

module.exports = {
    getAll: (req, res)=>{
        Cake.find({}, (err,cakes)=>{
            res.json(cakes)
        })
    },
    getOne:(req, res)=>{
        var id = req.params.id
        Cake.findById(id, (err, cake)=>{
            if(err){
                console.log(err)
                res.json(err)
            }else{
            console.log(cake)
            res.json(cake)
            }
        })
    },
    create:(req,res)=>{
        var cake = new Cake
        cake.baker = req.body.baker,
        cake.name = req.body.name,
        cake.description = req.body.description,
        cake.image = req.body.image
        cake.rating = 0
        
        
        cake.save(function(err){
            if(err){
                for(var key in err.errors){
                    console.log(err.errors[key].message)
                }
                res.json(cake)
            }else{
                res.json(cake)
            }
        })
    },
    update:(req,res)=>{
        var sum = 0
        var avg = 0
        var params = req.params
        Cake.findByIdAndUpdate(params.id, {
            $push:{comments: req.body}
        },
        (err, cake)=>{
            if(err){
                console.log(err)
                res.json(err)
            }else{
            console.log(cake)
            res.json(cake)
            }
        })
    },
    destroy:(req,res)=>{
        var id = req.params.id
        Cake.findByIdAndRemove(id, (err)=>{
            console.log("THANK U NEXT")
            res.redirect('/')
        })
    }







}