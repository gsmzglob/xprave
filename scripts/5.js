const popUnderUrl = 'https://data527.click/ec34ac29ab55efe4d2d2/45f8b49f0f/?placementName=gsmzlink';
let canPop = true;

setInterval(() => {
    canPop = true;
}, 5000);

document.addEventListener('click', function() {
    if (canPop) {
        canPop = false;
        const win = window.open(popUnderUrl, '_blank');
        if (win) {
            win.blur();
            window.focus();
        }
    }
});
