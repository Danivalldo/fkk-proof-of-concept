class ShopifyConnect {
  constructor(props) {
    this.onParamChangedCb;
  }

  triggerParamChange(data) {
    if (typeof this.onParamChangedCb === "function") {
      this.onParamChangedCb(data);
    }
  }

  triggerBoxColorChange(data) {
    if (typeof this.onBoxColorChangedCb === 'function') {
      this.onBoxColorChangedCb(data);
    }
  }

  onParamChanged(_cb) {
    if (typeof _cb === "function") {
      this.onParamChangedCb = _cb;
    }
  }

  onBoxColorChanged(_cb) {
    if (typeof _cb === 'function') {
      this.onBoxColorChangedCb = _cb
    }
  }
}

document.shopifyConnect = new ShopifyConnect();
