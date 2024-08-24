chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.tabs.executeScript(tab.id, { file: "content.js" }, () => {
      console.log("Content script injected successfully");
    });
  });
});