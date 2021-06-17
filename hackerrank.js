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

      return gpage.goto("https://www.hackerrank.com/auth/login");

  })
  .then(function(){
      return gpage.type("#input-1",mail);
  })
  .then(function(){
      return gpage.type("#input-2",pass);
  })
  .then(function(){
      return Promise.all([
          gpage.waitForNavigation(),
          gpage.click("[data-analytics='LoginPassword']"),``
      ]);
  })

 .then(function(){
     return Promise.all([
         gpage.waitForNavigation(),
         gpage.click("[data-attr1='interview-preparation-kit']"),
     ])
 })
 .then(function(){
     return gpage.waitForSelector("[data-attr1='warmup']");
 })
 .then(function(){
     return Promise.all([
         gpage.waitForNavigation(),
         gpage.click("[data-attr1='warmup']"),
     ])
 })
 .then(function(){
    return gpage.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary");
 })
 .then(function(){
     return Promise.all([
         gpage.waitForNavigation(),
         gpage.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary"),
     ])
 })
 .then(function(){
    return gpage.waitForSelector("[data-attr1='/challenges/sock-merchant/editorial']");
 })
 .then(function(){
     return Promise.all([
         gpage.waitForNavigation(),
         gpage.click("[data-attr1='/challenges/sock-merchant/editorial']"),
     ])
 })
 .then(function(){
     return handleLockBtn(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");
  })
//    .then(function(){
//        return gpage.evaluate(function(){
//            let allcodes=document.querySelectorAll(".challenge")
//        })
//    })
//   .then(function(){
//       return gpage.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled");
//   })
//   .then(function(){
//       return Promise.all([
//           gpage.waitForNavigation(),
//           gpage.click(".ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled"),
//       ])
//   })
  .then(function(){
    return gpage.evaluate(function(){
        let allCodes = document.querySelectorAll(".challenge-editorial-block.editorial-setter-code .highlight");


          let allLanguage =document.querySelectorAll(".challenge-editorial-block.editorial-setter-code h3");
 //ui-btn ui-btn-normal primary-cta ui-btn-primary ui-btn-styled
 let obj={};
 obj.code = allCodes[0].innerText;
 obj.language = allLanguage[0].innerText;
 return obj;
    })
})
  .then(function(obj){
      console.log(obj);
  })
  .then(function(){
      
  })
  
  .catch(function(err){
      console.log(err);
  });

  function handleLockBtn(selector)
  {
      return new Promise(function(scb,fcb){
          gpage.waitForSelector(selector).then(function(){
              return gpage.click(selector);
          })
          .then(function(){
              scb();
          })
          .catch(function(err){
              scb();
          });
      });
  }

handleLockBtn().then(()=>{

})