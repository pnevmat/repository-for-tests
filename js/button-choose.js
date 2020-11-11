const allButtonRef = document.querySelector('button[all]');
const webSitesButtonRef = document.querySelector('button[web-sites]');
const appsButtonRef = document.querySelector('button[apps]');
const designButtonRef = document.querySelector('button[design]');
const marketingButtonRef = document.querySelector('button[marketing]');

const allCardsRef = [...document.querySelectorAll('li[web-site]'),
    ...document.querySelectorAll('li[app]'),
    ...document.querySelectorAll('li[design]'),
    ...document.querySelectorAll('li[marketing]')];

webSitesButtonRef.addEventListener('click', onWebSitesButtonClick);
appsButtonRef.addEventListener('click', onAppsButtonClick);
designButtonRef.addEventListener('click', onDesignButtonClick);
marketingButtonRef.addEventListener('click', onMarketingButtonClick);
allButtonRef.addEventListener('click', onAllButtonClick);

function onWebSitesButtonClick() {
    allCardsRef.forEach((element, i) => {
        if (element.attributes[1].name !== 'web-site') {
            allCardsRef[i].classList.add('is-hidden');
        } else {
            allCardsRef[i].classList.remove('is-hidden');
        }
    });
};
function onAppsButtonClick() {
    allCardsRef.forEach((element, i) => {
        if (element.attributes[1].name !== 'app') {
            allCardsRef[i].classList.add('is-hidden');
        } else {
            allCardsRef[i].classList.remove('is-hidden');
        }
    });
};
function onDesignButtonClick() {
    allCardsRef.forEach((element, i) => {
        if (element.attributes[1].name !== 'design') {
            allCardsRef[i].classList.add('is-hidden');
        } else {
            allCardsRef[i].classList.remove('is-hidden');
        }
    });
};
function onMarketingButtonClick() {
    allCardsRef.forEach((element, i) => {
        if (element.attributes[1].name !== 'marketing') {
            allCardsRef[i].classList.add('is-hidden');
        } else {
            allCardsRef[i].classList.remove('is-hidden');
        }
    });
};
function onAllButtonClick() {
    allCardsRef.forEach((element, i) => {
        allCardsRef[i].classList.remove('is-hidden');
    });
};

// let listLength;

// webSitesButtonRef.addEventListener('click', () => {
//     listLength = appsCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             appsCardsRef[i].classList.add('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = designCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             designCardsRef[i].classList.add('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = marketingCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             marketingCardsRef[i].classList.add('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = webSitesCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         webSitesCardsRef[i].classList.remove('is-hidden');
//     }
// });

// appsButtonRef.addEventListener('click', () => {
//     listLength = webSitesCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         webSitesCardsRef[i].classList.add('is-hidden');
//     }
//     listLength = designCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             designCardsRef[i].classList.add('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = marketingCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             marketingCardsRef[i].classList.add('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = appsCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             appsCardsRef[i].classList.remove('is-hidden');
//         } else {
//             break;
//         }
//     }
// });

// designButtonRef.addEventListener('click', () => {
//     listLength = webSitesCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         webSitesCardsRef[i].classList.add('is-hidden');
//     }
//     listLength = appsCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             appsCardsRef[i].classList.add('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = marketingCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             marketingCardsRef[i].classList.add('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = designCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             designCardsRef[i].classList.remove('is-hidden');
//         } else {
//             break;
//         }
//     }
// });

// marketingButtonRef.addEventListener('click', () => {
//     listLength = webSitesCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         webSitesCardsRef[i].classList.add('is-hidden');
//     }
//     listLength = appsCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             appsCardsRef[i].classList.add('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = designCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             designCardsRef[i].classList.add('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = marketingCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             marketingCardsRef[i].classList.remove('is-hidden');
//         } else {
//             break;
//         }
//     }
// });

// allButtonRef.addEventListener('click', () => {
//     listLength = webSitesCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         webSitesCardsRef[i].classList.remove('is-hidden');
//     }
//     listLength = appsCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             appsCardsRef[i].classList.remove('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = designCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             designCardsRef[i].classList.remove('is-hidden');
//         } else {
//             break;
//         }
//     }
//     listLength = marketingCardsRef.length;
//     for (let i = 0; i < listLength; i += 1) {
//         if (i < listLength) {
//             marketingCardsRef[i].classList.remove('is-hidden');
//         } else {
//             break;
//         }
//     }
// });

// debugger;
