let pup = require("puppeteer");
let gbrowser;
let gpage;
//using launch function of puppeteer to  launch a browser(this function return promise)this function takes an object which take some action.one 
//of these headless by default the value of headless is true; u can override it and make the browser visible 
pup
  .launch({ headless: false,   
             defaultViewport: null,
              args:})
  //this then attach a function to above promise of opening a browser
  .then(function (browser){
      gbrowser=browser;
      return browser.newPage();

  })
  .then(function (page){
      gpage = page;

      return page.goto("https://www.google.com/");

  })
  .then(function(){
      return gpage.type("input.gLFyf.gsfi","Cats");
  })
  .then(function(){
      return Promise.all([
          gpage.waitForNavigation(),
          gpage.click(".FPdoLc.lJ9FBc")
      ]);
  })
  .then
  .then(function () {

    return gpage.screenshot({path: "ss.png"});
  })
  .then(function(){
      return  gbrowser.close();
  })
  .catch(function(err){
      console.log(err);
  });