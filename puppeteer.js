const puppeteer = require('puppeteer');
function run () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://www.ybtour.co.kr/product/localMain.yb?menu=PKG&dspSid=AAG0000");
            let urls = await page.evaluate(() => {
                let results = [];
                let items = document.querySelectorAll('a');
                // items.forEach((item) => {
                //     results.push({
                //         url:  item.getAttribute('href'),
                //         text: item.innerText,
                //     });
                // });
                console.log(document, 'in docu')
                return items;
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}
run().then(console.log).catch(console.error);