const http=require('http');
const fs=require('fs');
const path=require('path');
const server=http.createServer((req,res)=>{
    // console.log("client request come");
    // res.end("Hello");
    const {url,method}=req;
    console.log("url =", url);
    console.log("method =", method);

    function myfunc(endPath){
        fs.readFile(path.join(__dirname,endPath),(err,file)=>{
            if(err){
                return res.end("<h1>server side error</h1>")
            }else{
                return res.end(file);
            }
        })
    }
    if(url == "/favicon.ico") return;

    if(method=='GET')
    {
        switch(url)
        {
            case '/':
            case '/home':myfunc("pages/home.html");
            break;

            case '/home/css':myfunc('pages/css/style.css')
            break;

            case '/home/js': myfunc('pages/js/home.js')
            break;
            case '/about': myfunc('pages/about.html')
            break;
            case '/signup': myfunc('pages/signup.html')
            break;
            default:
                res.end("<h1>404 page not found</h1>")
        }
    }else if(method === 'POST'){
        res.end(JSON.stringify({message:"data recived in backend"}));
    }

})

server.listen('4000','localhost', ()=>{
    console.log("Server started http://localhost:4000");
})