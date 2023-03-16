import tinycolor from "https://esm.sh/tinycolor2";

window.addEventListener("load", function () {
  document.querySelector("#shopify-btn").addEventListener("click", function () {
    document.shopifyConnect.triggerParamChange({
      paramName: "handle",
      paramValue: "tripes",
      timestamp: Date.now(),
    });
  });
  document.querySelector("#box-color-btn").addEventListener("click", function () {
    const color = tinycolor.random();
    document.shopifyConnect.triggerBoxColorChange({
      color: color.toHexString()
    });
  });
});
