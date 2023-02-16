class ShopifyConnect {
  constructor(props) {
    this.onParamChangedCb;
  }

  triggerParamChange(data) {
    if (typeof this.onParamChangedCb === "function") {
      this.onParamChangedCb(data);
    }
  }

  onParamChanged(_cb) {
    if (typeof _cb === "function") {
      this.onParamChangedCb = _cb;
    }
  }
}

document.shopifyConnect = new ShopifyConnect();
