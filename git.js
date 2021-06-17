const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless :false});
  const page = await browser.newPage();
  await page.goto('https://github.com/topics');
  //await page.screenshot({path: 'output.png'});
 let inter= await page.evaluate(function(){
      
    let a=document.querySelectorAll(".f3.lh-condensed.text-center.Link--primary.mb-0.mt-1")
   
    let topics=[];
    for(let i=0;i<a.length;i++)
       {
           topics[i]=a[i].innerText.trim();
           console.log(topics[i]);
       }
       let anchor=document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");
       let link=[];
       for(let i=0;i<anchor.length;i++)
       {
           link.push("https://github.com"+anchor[i].getAttribute("href"));
           console.log(link[i]);
       }
       return {link,topics};
  });
  console.log(inter);
 // await browser.close();
})();