import "./apollopage.scss";
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import LoadingSpinner from "../_common/LoadingSpinner/LoadingSpinner";

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const ApolloPage = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <LoadingSpinner centered />;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data &&
        data.rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>
              {currency}: {rate}
            </p>
          </div>
        ))}
    </div>
  );
};

export default ApolloPage;
