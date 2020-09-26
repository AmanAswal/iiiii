const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {mongourl} = require('./config/keys');
// const Wish = require('./models/wish');

const Wish = mongoose.model('wishes');

// connecting mongodb with mongoose
mongoose.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true});

// recieving (app) because it is passed from app.js
module.exports = (app) => {
    // get routes
    app.get('/data', (req, res)=>{
        Wish.find({}).then(data=>{
            res.send(data);
            // res.render('home', {wish: data});

        })
    })

    // post route
    app.post('/sent', (req,res)=>{
        const Item = new Wish({
            wish: req.body.item
        });

        Item.save().then(data=>{
            res.send(data);
            console.log("saved");
        }).catch(err=>{
            throw err;
        })

        // console.log(req.body.item);
        // data.push(req.body.item);   // adding item to array data
        // res.send(data); // send the updated array data
    })

    // delete route
    app.delete('/remove/:id', (req,res)=>{
        Wish.findOneAndRemove({_id: req.params.id}).then(data=>{
            console.log("Successfully deleted");
            res.send(data);
        })
        // data = data.map(item=>{
        //         if(item != req.params.id){
        //             return item;
        //         }
        // })
        
    })

}

