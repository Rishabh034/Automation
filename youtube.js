const puppeteer = require("puppeteer");

(async function (){
    let totalVideos = 0;
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        defaultViewport: null,
        args: ["--start-maximized"],
    });

    const page =await browser.newPage();
    await page.goto("https://www.youtube.com/playlist?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj");

    await page.waitForSelector(".style-scope.yt-formatted-string");
    totalVideos =await page.evaluate(function(){
        let a=document.querySelectorAll(".style-scope.yt-formatted-string");
        let s=a[1].innerText;
        if(s.length > 3){
         s = s.split(",").join("");
    }
        return Number(s);
    });

    await page.evaluate(async function(tv){
        let a =document.querySelectorAll("#text.style-scope.ytd-thumbnail-overlay-time-status-renderer");
        let p= new Promise(function(resolve,reject){
            let interval = setInterval(function(){
                if(a.length != tv){
                    let videoCardContainer = document.querySelector("#contents");
                    window.scrollTo(0,videoCardContainer.scrollHeight);
                    a = document.querySelectorAll("#text.style-scope.ytd-thumbnail-overlay-time-status-renderer");
                }
                else{
                    clearInterval(interval);
                    resolve();
                }

                },500);
            });

            await p;
            let allDuration = [];
            for(let i=0;i<a.length;i++)
            {
                allDuration.push(a[i].innerText.trim());
            }
             console.log(allDuration);
        } ,totalVideos);

        console.log(totalVideos);
            })();
        