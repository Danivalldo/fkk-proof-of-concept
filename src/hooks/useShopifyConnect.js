import { useEffect, useState } from "react";

const useShopifyConnect = () => {
  const [param, setParam] = useState(null);
  const [boxColor, setBoxColor] = useState('orange');
  useEffect(() => {
    document.shopifyConnect.onParamChanged((newParam) => {
      setParam(newParam);
    });
    document.shopifyConnect.onBoxColorChanged(({ color }) => {
      setBoxColor(color);
    })
  }, []);
  return { param, boxColor };
};

export default useShopifyConnect;
