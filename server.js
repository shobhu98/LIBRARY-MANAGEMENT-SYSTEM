let express=require('express');
let app=express();
let port=process.env.PORT||5000;
let db=require('./db');
let bodyParser=require('body-parser');

app.use('/',express.static('views'));
app.use(bodyParser.text());


app.post('/add',function (req,res) {


    let body=JSON.parse(req.body);
    let name=body.naming;
    let author=body.author;
    let genre=body.genre;
    db.insertIntodb(name,author,genre,function () {
        // res.sendStatus(200);
      res.send( name+" added successfully")

    })




});

app.get('/search',function (req,res) {

    let name=req.query.qi;
    db.searchIntodb(name,function (val) {
        console.log(val);
        res.send(val);


    });


    
});




app.listen(port,function () {
    console.log("app running on "+port+" number");
    db.connection.connect();

});

