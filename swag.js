let pup = require("puppeteer");
let gbrowser;
let gpage;
//let mail="let pup = require("puppeteer");
// let gbrowser;
// let gpage;
let mail="standard_user";
let pass="secret_sauce";

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

      return gpage.goto("https://www.saucedemo.com");

  })
  .then(function(){
    return gpage.type("#user-name",mail);
})
.then(function(){
    return gpage.type("#password",pass);
})
.then(function(){
    return Promise.all([
        gpage.waitForNavigation(),
        gpage.click(".submit-button.btn_action")
    ]);
})
.then(function(){
    gpage.evaluate(function(){
     let a=   document.querySelectorAll("inventory_item_img");
     let image=[];
     let j=0;
     for(let i=0;i<a.length;i=i+2)
     {
       image[j++]=a[i];
     }
    })

    for(let i=0;i<image.length;i++)
       console.log(i);
})