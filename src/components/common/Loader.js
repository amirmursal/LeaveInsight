import React from "react";

export default class Loader extends React.Component {
  render() {
    return (
      <div className="cube-wrapper">
        <div className="cube-folding">
          <span className="leaf1"></span>
          <span className="leaf2"></span>
          <span className="leaf3"></span>
          <span className="leaf4"></span>
        </div>
      </div>
    );
  }
}
