import React from "react";
import { COLORS } from "./colors.js";
import Tile from "./Tile.js";

class Knob extends React.PureComponent {
  changeTile = () => {
    this.props.updateKnob(this.props.index);
  };
  render() {
    return (
      <div className="knob" onClick={this.changeTile}>
        {this.props.rgb ? <Tile rgb={this.props.rgb} /> : ""}
      </div>
    );
  }
}
class Baseplate extends React.PureComponent {
  render() {
    const knobs = this.props.pins.map((e, i) => {
      return (
        <Knob
          rgb={e >= 0 ? COLORS[e].rgb : ""}
          key={i}
          index={i}
          updateKnob={this.props.updateKnob}
        />
      );
    });
    return (
      <section className={`baseplate ${this.props.baseColor}`}>{knobs}</section>
    );
  }
}
export default Baseplate;
