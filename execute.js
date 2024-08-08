const rotateEvent = () => {
  };
const reset = () => {
  };
const translate = () => {

};
  
const onMessage = (message) => {
    switch (message.action) {
      case 'ROTATE':
        document.querySelector("#root > div > div > div.content-main > div.content-main-area > div").add
        rotateEvent();
        break;
      case 'RESET':
        reset();
        break;
      default:
        break;
    }
}
  
chrome.runtime.onMessage.addListener(onMessage);