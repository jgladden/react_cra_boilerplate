import "./primarynav.scss";
import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setModal, getPortfolio, submitLogout } from "../../../_actions";
import { getPortfolioTypes } from "../../../_selectors/";
import Login from "../Login/Login";

export const PrimaryNav = ({
  match: { params },
  setModal,
  getPortfolio,
  portfolioTypes,
  portfolio,
  submitLogout,
  token
}) => {
  useEffect(() => {
    if (!portfolio) getPortfolio();
  }, [getPortfolio, portfolio]);

  const navLink = (label, link) => (
    <li className={link === params.location ? "active" : ""} key={link}>
      <Link to={link}>{label.toUpperCase()}</Link>
    </li>
  );

  const displayLogin = () => {
    setModal(<Login />);
  };

  if (!portfolioTypes.length) return null;

  return (
    <div id="primarynav">
      <ul>
        {navLink("APOLLO", "/")}
        {portfolioTypes &&
          portfolioTypes.map(type =>
            navLink(type.toUpperCase(), `/portfolio/${type}`)
          )}
        {token && <li onClick={submitLogout}>SIGN OUT</li>}
        {!token && <li onClick={displayLogin}>SIGN IN</li>}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  portfolio: state.portfolio.portfolio,
  portfolioTypes: getPortfolioTypes(state),
  token: state.auth.token
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      setModal,
      getPortfolio,
      submitLogout
    }
  )(PrimaryNav)
);
