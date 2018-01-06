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
// 如果需要 session 支持，sessionStore 必须放在 watch 之后
app.use(expressSession({
    secret: 'abcd123',
    store: new expressSession.MemoryStore(),
    resave: false,
    saveUninitialized: true
}));


app.get('/gan',function(req,res){
    res.sendfile('gan.html');
    console.log('gan page is required ');
});

app.get('/me',function(req,res){
    res.sendfile('home.html');
    console.log('main page is required ');
});

app.get('/red/:userid',function(req,res){
    new_url = "https://qr.alipay.com/" + req.params.userid;
    res.render("template", {new_url : new_url});
    console.log('redirect new url is  ' + new_url);
});

app.get('/wuya',function(req,res){
    res.sendfile('wuya.html') ;
    console.log('wuya page is required ');
});

new Wolf().monitor(app, 'wolf', '/wechat');

// 在生产环境，你应该将此处的 store 换为某种永久存储。
// 请参考 http://expressjs.com/2x/guide.html#session-support
// 在环境变量提供的 $PORT 或 3000 端口监听
var port = process.env.PORT || 80
app.listen(port, function(){
    log("Listening on %s", port);
})

// 微信接口地址只允许服务放在 80 端口
// 所以需要做一层 proxy
//app.enable('trust proxy');

