import React from "react";
import whiteKnob from "./imgs/whiteknob.svg";
import blueKnob from "./imgs/blueknob.svg";
import greenKnob from "./imgs/greenknob.svg";

const baseColors = [
  { name: "white", img: whiteKnob },
  { name: "blue", img: blueKnob },
  { name: "green", img: greenKnob }
];

class ColorRadioButton extends React.PureComponent {
  updateBase = () => {
    this.props.onBaseChange(this.props.val);
  };
  render() {
    return (
      <div className="base-col-radio">
        <label className="label" htmlFor={this.props.val}>
          <img
            className="label-img"
            src={this.props.img}
            alt={this.props.val}
          />
        </label>
        <input
          className="radio-input"
          type="radio"
          id={this.props.val}
          name="baseplate"
          value={this.props.val}
          checked={this.props.isChecked}
          onChange={this.updateBase}
        />
      </div>
    );
  }
}

class BaseplateSwitcher extends React.PureComponent {
  render() {
    const radioButtons = baseColors.map((c, i) => (
      <ColorRadioButton
        val={c.name}
        isChecked={this.props.chosen === c.name}
        img={c.img}
        onBaseChange={this.props.onBaseChange}
        key={i}
      />
    ));
    return <div className="base-color-switch">{radioButtons}</div>;
  }
}

export default BaseplateSwitcher;
