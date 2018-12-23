console.log("autosnope enabled");

const urls = new Set([].filter.call(
    document.querySelectorAll(':not(.hidden_elem) [data-testid="fbfeed_story"]:not(.sponsored_ad) a:not([class])'),
    a => a.getAttribute('href').includes('http') &&
        !a.getAttribute('href').includes('facebook.com/') &&
        getComputedStyle(a).display !== 'none' &&
        getComputedStyle(a).visibility !== 'hidden'
).map(a => a.getAttribute('href')));

console.log(urls);

const fakeNewsSitesListUrl = "https://www.dailydot.com/layer8/fake-news-sites-list-facebook/";
