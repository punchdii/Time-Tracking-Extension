import { Site } from './site.js'; 
const siteMap = new Map();
//determine if current is focused and active
chrome.runtime.onInstalled.addListener(({reason}) => {
  if (reason === 'install') {
    chrome.tabs.create({
      url: "onboarding.html"
    });
  }
});


//figure out the behavior of this, execute 
async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  
  if (tab) {
    let tabURL = tab.url;
    let match = tabURL.match(/^https?:\/\/([^/]+)/);

  if (match) {
    let domain = match[1];
    console.log(domain);
  }
    console.log("Current tab URL:", tabURL);
    if(!siteMap.get(tabURL)){
    const site = new Site(tabURL); //if this url doesnt exist yet, we create a new object with 
    //site.startTime
    siteMap.set(site.link,site);
  }
  console.log("Current tab URL:", tabURL);
  console.log(siteMap);

  } else {
    console.log("No active tab found.");
    //log end for the last active tab
  }
}

setInterval(getCurrentTab, 2000);
