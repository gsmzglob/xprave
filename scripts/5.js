(function() {
    const url = "https://data527.click/ec34ac29ab55efe4d2d2/45f8b49f0f/?placementName=gsmzlink";
    let canOpen = true;

    function createPopUnder() {
        if (!canOpen) return;

        canOpen = false;
        
        const win = window.open(url, '_blank');
        
        if (win) {
            win.blur();
            window.focus();
        }

        setTimeout(() => {
            canOpen = true;
        }, 7000);
    }

    document.addEventListener('click', createPopUnder, { capture: true });
})();
