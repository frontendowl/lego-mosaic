import React from "react";
import "./App.scss";
import { COLORS } from "./colors.js";
import delCursor from "./imgs/cursorEraser.svg";

import BaseplateSwitcher from "./BaseplateSwitcher.js";
import Palette from "./Palette.js";
import DetailsList from "./DetailsList.js";
import Baseplate from "./Baseplate.js";

import getCursorDataURI from "./getCursorDataURI.js";

const baseplateSide = 32;
const pinsNum = Math.pow(baseplateSide, 2);

class App extends React.Component {
  constructor(props) {
    super(props);
    const baseKnobs = Array(pinsNum).fill(-1);
    const used = new Map();
    this.state = {
      brush: 0,
      baseColor: "white",
      baseplate: baseKnobs,
      details: used,
      cursorImg: `url(${getCursorDataURI(COLORS[0].rgb)})`
    };
  }

  handleBaseplateSwitch = color => {
    this.setState({ baseColor: color });
  };

  handleColorSwitch = i => {
    if (i === this.state.brush) return;
    this.setState({
      brush: i,
      cursorImg: null
    });
  };

  handleEraser = () => {
    this.setState({ brush: -1, cursorImg: null });
  };

  handleKnobChange = i => {
    this.setState(state => {
      const curColor = state.baseplate[i];
      const nextColor = state.brush;
      if (curColor === nextColor) return;
      const plate = [...state.baseplate];
      plate[i] = nextColor;
      const nextDetails = new Map(state.details);
      if (curColor !== -1) {
        const curColCount = nextDetails.get(curColor);
        if (curColCount > 1) {
          nextDetails.set(curColor, curColCount - 1);
        } else {
          nextDetails.delete(curColor);
        }
      }
      if (nextColor !== -1) {
        const nextColCount = nextDetails.has(nextColor)
          ? nextDetails.get(nextColor) + 1
          : 1;
        nextDetails.set(nextColor, nextColCount);
      }

      return { baseplate: plate, details: nextDetails };
    });
  };

  componentDidUpdate() {
    if (this.state.cursorImg == null) {
      const cursorImg = `url(${
        this.state.brush === -1
          ? delCursor
          : getCursorDataURI(COLORS[this.state.brush].rgb)
      })`;
      setTimeout(() => this.setState({ cursorImg: cursorImg }), 250);
    }
  }

  render() {
    const cursor = this.state.cursorImg
      ? `${this.state.cursorImg} 10 10, auto`
      : undefined;
    return (
      <div className="App" style={{ cursor }}>
        <header className="App-header">
          <BaseplateSwitcher
            chosen={this.state.baseColor}
            onBaseChange={this.handleBaseplateSwitch}
          />
          <Palette
            chosen={this.state.brush}
            onColorChange={this.handleColorSwitch}
            turnOnEraser={this.handleEraser}
          />
          <DetailsList details={this.state.details} />
        </header>
        <Baseplate
          pins={this.state.baseplate}
          updateKnob={this.handleKnobChange}
          baseColor={this.state.baseColor}
        />
      </div>
    );
  }
}

export default App;
