// Generated by https://pagedraw.io/pages/13216
import React from "react";
import Keyvaluetext from "./keyvaluetext";
import "./colorcard.css";

export default class Colorcard extends React.Component {
  render() {
    return (
      <div className="colorcard-container">
        <div className="colorcard">
          <div className="label-container">
            <div className="label">
              <Keyvaluetext label={"Name:"} value={this.props.name} />
            </div>
            <div className="label">
              <Keyvaluetext label={"Number:"} value={this.props.number} />
            </div>
            <div className="label">
              <Keyvaluetext label={"Locator:"} value={this.props.locator} />
            </div>
          </div>
          <div className="colorchip" style={{ background: this.props.color }} />
        </div>
      </div>
    );
  }
}