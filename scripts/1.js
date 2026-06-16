(function () {
  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.margin = "auto";
  container.style.position = "relative";
  container.style.zIndex = "99998";

  container.innerHTML = `
    <iframe data-aa="2444135"
      src="//acceptable.a-ads.com/2444135/?size=Adaptive"
      style="border:0; padding:0; width:70%; height:auto; overflow:hidden; display:block; margin:auto">
    </iframe>
  `;

  document.currentScript.parentNode.insertBefore(container, document.currentScript);
})();