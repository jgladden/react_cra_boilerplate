import "./modal.scss";
import React from "react";
import { connect } from "react-redux";
import { setModal } from "../../../_actions";

const Modal = ({ display, setModal }) => {
  const hideModal = e => {
    if (e.target === e.currentTarget) setModal();
  };
  if (!display) return null;
  return (
    <div id="modalroot">
      <div id="modalroot__display" onClick={hideModal}>
        {display}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  display: state.modal.display
});

export default connect(
  mapStateToProps,
  {
    setModal
  }
)(Modal);
