
var data = ['Code', 'Sleep', 'Eat'];

// recieving (app) because it is passed from app.js
module.exports = (app) => {
    // get routes
    app.get('/', (req, res)=>{
        res.render('home', {wish: data});
    })

    app.get('/about', (req, res)=>{
        res.render('about');
    })

    // post route
    app.post('/sent', (req,res)=>{
        console.log(req.body.item);
        data.push(req.body.item);   // adding item to array data
        res.send(data); // send the updated array data
    })

    // delete route
    app.delete('/remove/:id', (req,res)=>{
        data = data.map(item=>{
                if(item != req.params.id){
                    return item;
                }
        })
        res.send(data);
    })

}

