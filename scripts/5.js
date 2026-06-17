(function() {
    const url = "https://www.effectivecpmnetwork.com/bk74jiwd?key=e732a41a62f28d6926f491b74ba4e49c";
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
