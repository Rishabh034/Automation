let pup = require("puppeteer");
let gbrowser;
let gpage;
//let mail="let pup = require("puppeteer");
// let gbrowser;
// let gpage;
//let mail="mihobij471@vvaa1.com";
//let pass="mihobij471@vvaa1.com";

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

      return gpage.goto("http://the-internet.herokuapp.com");
  })
  .then(function(){
      //#content > ul > li:nth-child(15) > a
      return gpage.evaluate(function(){
        let list = document.querySelectorAll("#content ul li");
        let data=list[15];
         return data;

  })
})
  .then(function(data){
      return gpage.click(data);
  })
