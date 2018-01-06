var express             = require('express');
var app                 = express();
var bodyParse           = require('body-parser');
var cookieParser        = require('cookie-parser');
var expressSession      = require('express-session');
var ejs                 = require('ejs');
var Wolf                = require('./lib/wolf');

app.use(cookieParser()) ;
app.use(bodyParse.urlencoded({extended:false})) ;
app.engine('html', ejs.renderFile);
app.set("view engine", "html");
// 在生产环境，你应该将此处的 store 换为某种永久存储。
// 请参考 http://expressjs.com/2x/guide.html#session-support
// 如果需要 session 支持，sessionStore 必须放在 watch 之后
app.use(expressSession({
    secret: 'someElse',
    store: new expressSession.MemoryStore(),
    resave: false,
    saveUninitialized: true
}));

function generate_user_page(res, userid){
    new_url = "https://qr.alipay.com/" + req.params.userid;
    res.render("template", {new_url : new_url});
    console.log('redirect new url is  ' + new_url);
}

app.get('/gan',function(req,res){
    generate_user_page(res, "c1x04314waex22zanlx2u57");
});

app.get('/me',function(req,res){
    generate_user_page(res, "c1x08530scdkzjtabmt7f27");
});

app.get('/wuya',function(req,res){
    generate_user_page(res, "c1x00712pbzcldyrqgyqj03");
});

app.get('/red/:userid',function(req,res){
    generate_user_page(res, req.params.userid);
});

new Wolf().monitor(app, 'wolf', '/wechat');

// 在环境变量提供的 $PORT 或 3000 端口监听
var port = process.env.PORT || 80
app.listen(port, function(){
    console.log("Listening on %s", port);
})

