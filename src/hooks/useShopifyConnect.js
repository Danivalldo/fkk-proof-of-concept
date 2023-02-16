import { useEffect, useState } from "react";

const useShopifyConnect = () => {
  const [param, setParam] = useState(null);
  useEffect(() => {
    document.shopifyConnect.onParamChanged((newParam) => {
      setParam(newParam);
    });
  }, []);
  return { param };
};

export default useShopifyConnect;
