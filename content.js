chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'execute') {
    const keySequence = ['a', 'r', 'b', 'b', 'Escape'];
    const delays = [3000, 1000, 2000, 2000, 1000];
    const terminationCount = request.terminationCount; // Get the termination count from the request

    function simulateKeyPress(index) {
      if (index >= keySequence.length || terminationCount <= 0) {
        return;
      }

      const key = keySequence[index];
      const delay = delays[index];

      const event = new KeyboardEvent('keydown', {
        key,
        code: key.toUpperCase(),
      });

      document.dispatchEvent(event);

      terminationCount--; // Decrement the termination count

      setTimeout(() => {
        simulateKeyPress(index + 1);
      }, delay);
    }

    simulateKeyPress(0);
  }
});