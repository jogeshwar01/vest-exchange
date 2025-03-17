import { Navigate, useParams } from "react-router-dom";

import { markets } from "../utils/constants";

export const Trade = () => {
  const { market } = useParams();

  if (!markets.includes(market as string)) {
    return <Navigate to="/trade/ETH-PERP" />;
  }

  return <div className="flex h-full flex-col">Vest Exchange</div>;
};
