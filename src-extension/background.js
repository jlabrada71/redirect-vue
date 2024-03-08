  async function getUrlSet(setName) {
    const urls = await getObjectFromLocalStorage(setName);
    return urls || [];
  }

  function getBannedUrls() {
    return getUrlSet('bannedUrls');
  }

  function updateBannedUrls(urls) {
    return saveObjectInLocalStorage( { bannedUrls: urls });
  }

  function getRecommendedUrls() {
    return getUrlSet('recommendedUrls');
  }

  function updateRecommendedUrls(urls) {
    return saveObjectInLocalStorage( { recommendedUrls: urls });
  }

  async function init() {
    const bannedUrls = await getBannedUrls();
    console.log('Banned Urls')
    console.log(bannedUrls);

    const recommendedUrls = await getRecommendedUrls();
    console.log('Recommended Urls')
    console.log(recommendedUrls);
  }

  init();

  
  chrome.webNavigation.onCommitted.addListener(async function(details) {
    try {
        let currentTabId = details.tabId;
        const bannedUrls = await getBannedUrls();
        console.log('Banned Urls')
        console.log(bannedUrls);

        for (let url of bannedUrls) {
        console.log(details.url)
        if (details.url.includes(url)) {
            chrome.tabs.remove(currentTabId);
            chrome.tabs.create({ url: "redirect.html" });
            break;
        }
        }
    } catch(e) {
        console.log(e)
    }
  });

  /**
 * Retrieves an object from Chrome's local storage.
 * @param {string} key
 */
async function getObjectFromLocalStorage(key) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(key, async function (value) {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(value[key]);
        }
      });
    });
  }

  /**
 * Saves an object in Chrome's local storage.
 * @param {Object} obj
 */
async function saveObjectInLocalStorage(obj) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.set(obj, async function () {
        if (chrome.runtime.lastError) {
          await remoteLog("Error in saveObjectInLocalStorage: " + chrome.runtime.lastError.message);
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  }
  
  /**
   * Removes object from Chrome's local storage.
   * @param {string} key
   */
  async function removeObjectFromLocalStorage(key) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.remove(key, function () {
        if (chrome.runtime.lastError) {
          // Handle any error that occurred during the removal
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  }

  async function banUrl(url) {
    const urls = await getBannedUrls();
    urls.push(url);
    return updateBannedUrls(urls);
  }

  async function recommendUrl(url) {
    const urls = await getRecommendedUrls();
    urls.push(url);
    return updateRecommendedUrls(urls);
  }

  /**
 * Listener for new message
 */
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log('Sender: ' + sender );
    try {
        if (message.to !== "background") {
            console.log('Unknown target: '  + JSON.stringify(message, null, 2));
            sendResponse({ success: false, message: 'Unknown target' }); // Optionally send a response
        } else if (message.action === "ban-url") {  // if ese are required since we need to send the appropriate message when not known.
            banUrl(message.url).then(() => {
                console.log('Url banned');
                sendResponse({ success: true }); // Optionally send a response
            })
        } else  if (message.action === "banned-list") {
            getBannedUrls().then(urls => {
                console.log('returning banned list');
                sendResponse({ success: true, urls }); // Optionally send a response
            });
        } else if (message.action === "recommend-url") {  // if ese are required since we need to send the appropriate message when not known.
            recommendUrl(message.url).then(() => {
                console.log('Url recommended');
                sendResponse({ success: true }); // Optionally send a response
            })
        } else if (message.action === "recommended-list") {
            getRecommendedUrls().then(urls => {
                console.log('Returning recommended list');
                console.log(urls);
                sendResponse({ success: true, urls }); // Optionally send a response
            });
        } else {
            console.log('Unknown action: ' + JSON.stringify(message, null, 2));
            sendResponse({ success: false, message: 'Unknown action' }); // Optionally send a response
        }
    } catch (e) {
      console.log(e);
      sendResponse({ success: false, error: e.message });
    }
    return true;  // this true indicates an asynchronous sendResponse.
  });