<script>
    const targetUrl = "https://data527.click/ec34ac29ab55efe4d2d2/45f8b49f0f/?placementName=gsmzlink";
    
    function createPopunder() {
        const popunderWindow = window.open(targetUrl, '_blank', 'width=1000,height=800,scrollbars=yes,resizable=yes');
        if (popunderWindow) {
            popunderWindow.blur();
            window.focus();
        }
    }

    document.addEventListener('click', function() {
        setTimeout(() => {
            createPopunder();
        }, 5000);
    });
</script>
