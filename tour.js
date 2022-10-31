const Crawler = require('crawler');

const c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($('title').text());
        }
        done();
    }
});


// Queue just one URL, with default callback
// 구찌 신상 
// https://www.gucci.com/ca/en/c/productgrid?categoryCode=new-women&show=Page&page=1
// https://www.gucci.com/ca/en/c/productgrid?categoryCode=new-men&show=Page&page=1
// 샤넬 크롤링 난해...
c.queue(['https://www.ybtour.co.kr/product/localMain.yb?menu=PKG&dspSid=AAG0000']);

