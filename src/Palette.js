import React from "react";
import { COLORS } from "./colors.js";

class Color extends React.PureComponent {
  updateBrush = () => {
    this.props.onColorChange(this.props.index);
  };
  render() {
    return (
      <div
        className={`color-box${this.props.isActive ? " chosen" : ""}`}
        style={{ backgroundColor: this.props.rgb }}
        onClick={this.updateBrush}
      />
    );
  }
}

class Eraser extends React.PureComponent {
  render() {
    return (
      <div
        className={`eraser${this.props.isActive ? " chosen" : ""}`}
        onClick={this.props.turnOnEraser}
      />
    );
  }
}

class Palette extends React.PureComponent {
  render() {
    const bricksColors = COLORS.map((e, i) => (
      <Color
        key={i}
        index={i}
        onColorChange={this.props.onColorChange}
        rgb={e.rgb}
        isActive={this.props.chosen === i}
      />
    ));
    return (
      <div className="palette">
        {bricksColors}
        <Eraser
          turnOnEraser={this.props.turnOnEraser}
          isActive={this.props.chosen === -1}
        />
      </div>
    );
  }
}
export default Palette;
