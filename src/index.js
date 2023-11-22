var target = null;

document.addEventListener("contextmenu", function(event){
    target = event.target;
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.value) {
        const inputEvent = new Event('input', { bubbles: true });
        
        target.value = request.value;
        target.dispatchEvent(inputEvent);
    }

    sendResponse({value: true})
})
