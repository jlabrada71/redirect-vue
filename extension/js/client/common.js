/**
 * List the childrens and ids of a node
 */
function listChildrens(node, space) {
    for (const child of node.children) {
        console.log(space + ': <' + node.tagName + ' ' + node.id + '>');
        if (child.children.length) {
            listChildrens(child, space + '---');
        }
    }
}

/**
 * Assigns a click event handler to an element.
 */
function onclick(el, fn) {
    console.log('registering onclick');
    listChildrens(document, '');

    const element = get(el);
    if (element) {
        console.log('found')
        element.onclick = fn;
    }
  }
  
/**
 * Retrieves an HTML element by its ID.
 */
function get(elementId) {
    return document.getElementById(elementId);
}

function sendMessage(message) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("message " + JSON.stringify(message));
        chrome.runtime.sendMessage(message, function (response) {
          if (chrome.runtime.lastError) {
            console.log("Error in sendMessage: " + chrome.runtime.lastError.message);
            reject(chrome.runtime.lastError);
          } else {
            resolve(response);
          }
        });
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }
  