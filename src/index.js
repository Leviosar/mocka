var target = null;

document.addEventListener("contextmenu", function(event){
    target = event.target;
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.value) {
        target.value = request.value
    }

    sendResponse({value: true})
})