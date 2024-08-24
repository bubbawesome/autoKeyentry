document.getElementById('submit').addEventListener('click', () => {
  const terminationCount = parseInt(document.getElementById('terminationCount').value);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, { action: 'execute', keyCombination, delay, terminationCount });
  });
});