const   mongoose = require('mongoose'),
        Cake = mongoose.model('Cake'),
        cakes = require('../controllers/cakes')
        module.exports = function(app){
            app.get("/cakes", (req, res)=>{
                cakes.getAll(req, res)
            })
            app.get("/cakes/:id", (req, res)=>{
                cakes.getOne(req, res)
            })
            app.post("/cakes", (req, res)=>{
                cakes.create(req, res)
            })
            app.put("/cakes/:id", (req, res)=>{
                cakes.update(req, res)
            })
            app.delete("/cakes/:id", (req, res)=>{
                cakes.destroy(req, res)
            })
        
        }