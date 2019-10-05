import { createSelector } from "reselect";

const portfolio = state => state.portfolio.portfolio;

export const getPortfolioTypes = createSelector(
  [portfolio],
  portfolio => (portfolio ? Object.keys(portfolio) : [])
);
