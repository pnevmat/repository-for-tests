const allButtonRef = document.querySelector('button[all]');
const webSitesButtonRef = document.querySelector('button[web-sites]');
const appsButtonRef = document.querySelector('button[apps]');
const designButtonRef = document.querySelector('button[design]');
const marketingButtonRef = document.querySelector('button[marketing]');

const webSitesCardsRef = document.querySelectorAll('li[web-site]');
const appsCardsRef = document.querySelectorAll('li[app]');
const designCardsRef = document.querySelectorAll('li[design]');
const marketingCardsRef = document.querySelectorAll('li[marketing]');


let listLength;

// console.log(typeof(listLength));
// console.log(allButtonRef);
// console.log(designCardsRef[0]);

webSitesButtonRef.addEventListener('click', () => {
    listLength = appsCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            appsCardsRef[i].classList.add('is-hidden');
        } else {
            break;
        }
    }
    listLength = designCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            designCardsRef[i].classList.add('is-hidden');
        } else {
            break;
        }
    }
    listLength = marketingCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            marketingCardsRef[i].classList.add('is-hidden');
        } else {
            break;
        }
    }
    listLength = webSitesCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        webSitesCardsRef[i].classList.remove('is-hidden');
    }
});

appsButtonRef.addEventListener('click', () => {
    listLength = webSitesCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        webSitesCardsRef[i].classList.add('is-hidden');
    }
    listLength = designCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            designCardsRef[i].classList.add('is-hidden');
        } else {
            break;
        }
    }
    listLength = marketingCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            marketingCardsRef[i].classList.add('is-hidden');
        } else {
            break;
        }
    }
    listLength = appsCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            appsCardsRef[i].classList.remove('is-hidden');
        } else {
            break;
        }
    }
});

designButtonRef.addEventListener('click', () => {
    listLength = webSitesCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        webSitesCardsRef[i].classList.add('is-hidden');
    }
    listLength = appsCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            appsCardsRef[i].classList.add('is-hidden');
        } else {
            break;
        }
    }
    listLength = marketingCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            marketingCardsRef[i].classList.add('is-hidden');
        } else {
            break;
        }
    }
    listLength = designCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            designCardsRef[i].classList.remove('is-hidden');
        } else {
            break;
        }
    }
});

marketingButtonRef.addEventListener('click', () => {
    listLength = webSitesCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        webSitesCardsRef[i].classList.add('is-hidden');
    }
    listLength = appsCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            appsCardsRef[i].classList.add('is-hidden');
        } else {
            break;
        }
    }
    listLength = designCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            designCardsRef[i].classList.add('is-hidden');
        } else {
            break;
        }
    }
    listLength = marketingCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            marketingCardsRef[i].classList.remove('is-hidden');
        } else {
            break;
        }
    }
});

allButtonRef.addEventListener('click', () => {
    listLength = webSitesCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        webSitesCardsRef[i].classList.remove('is-hidden');
    }
    listLength = appsCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            appsCardsRef[i].classList.remove('is-hidden');
        } else {
            break;
        }
    }
    listLength = designCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            designCardsRef[i].classList.remove('is-hidden');
        } else {
            break;
        }
    }
    listLength = marketingCardsRef.length;
    for (let i = 0; i < listLength; i += 1) {
        if (i < listLength) {
            marketingCardsRef[i].classList.remove('is-hidden');
        } else {
            break;
        }
    }
});