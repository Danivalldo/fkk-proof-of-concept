window.addEventListener("load", function () {
  document.querySelector("#shopify-btn").addEventListener("click", function () {
    document.shopifyConnect.triggerParamChange({
      paramName: "handle",
      paramValue: "tripes",
      timestamp: Date.now(),
    });
  });
});
