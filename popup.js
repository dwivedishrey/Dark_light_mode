if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle");
    let buttonOn = false;

    button.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tabId = tabs[0].id;

            if (!buttonOn) {
                buttonOn = true;
                button.style.animation = "transformToBlue 1s ease-in-out 0s forwards";
                circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards";

                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    files: ['appOn.js']
                });
            } else {
                buttonOn = false;
                button.style.animation = "transformToYellow 1s ease-in-out 0s forwards";
                circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards";

                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    files: ['appOff.js']
                });
            }
        });
    });
}
