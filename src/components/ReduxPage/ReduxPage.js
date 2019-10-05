import "./reduxpage.scss";
import React from "react";
import { connect } from "react-redux";
import LoadingSpinner from "../_common/LoadingSpinner/LoadingSpinner";

export const ReduxPage = ({ match: { params }, portfolio, loading, error }) => {
  if (loading) return <LoadingSpinner centered />;
  if (error) return <p>{error}</p>;
  if (!portfolio) return null;

  const type = portfolio[params.type];
  const displayItems = Object.keys(type).map(key => type[key]);

  return (
    <div id="reduxpage">
      <ul>
        {displayItems &&
          displayItems.map(item => (
            <li key={item.id}>
              <p>{item.title}</p>
              <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  portfolio: state.portfolio.portfolio,
  loading: state.portfolio.loading,
  error: state.portfolio.error
});

export default connect(
  mapStateToProps,
  {}
)(ReduxPage);
