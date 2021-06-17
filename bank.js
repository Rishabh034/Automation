let pup = require("puppeteer");
let gbrowser;
let gpage;
//let mail="let pup = require("puppeteer");
// let gbrowser;
// let gpage;
let mail="mihobij471@vvaa1.com";
let pass="mihobij471@vvaa1.com";

pup
  .launch({ headless: false,   
             defaultViewport: null,
              args:["--start-maximized"]})
  //this then attach a function to above promise of opening a browser
  .then(function (browser){
      gbrowser=browser;
      return browser.pages();

  })
  .then(function (pageArr){
      gpage = pageArr[0];

      return gpage.goto("https://demo.applitools.com");

  })
  .then(function(){
    return gpage.type("#username",mail);
})
.then(function(){
    return gpage.type("#password",pass);
})
.then(function(){
    return Promise.all([
        gpage.waitForNavigation(),
        gpage.click("#log-in")
    ]);
})
.catch(function(){
    console.log("failed")
    
})
.then(function(){
    gpage.evaluate(function(){
        let a=document.querySelectorAll(".text-right.bolder.nowrap");
        let min=a[0];
        for(let i=0;i<a.length;i++)
        {

        }
    })
})