const adUnitId = '2444135';
const adHtml = `<div style="width:100%;margin:auto;position:relative;z-index:99998;"><iframe data-aa="${adUnitId}" src="//acceptable.a-ads.com/${adUnitId}/?size=Adaptive" style="border:0;padding:0;width:100%;height:90px;overflow:hidden;display:block;margin:auto"></iframe></div>`;

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.gsmz-ad-slot').forEach(slot => {
        slot.innerHTML = adHtml;
    });
});
