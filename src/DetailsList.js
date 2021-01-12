import React from "react";
import { COLORS } from "./colors.js";
import Tile from "./Tile.js";

class DetailItem extends React.PureComponent {
  render() {
    const colorInfo = COLORS[this.props.colorInd];
    return (
      <li className="detail">
        <Tile rgb={colorInfo.rgb} />
        {`${this.props.n}× ${colorInfo.element} (${colorInfo.name})`}
      </li>
    );
  }
}
class DetailsList extends React.PureComponent {
  render() {
    const details = [];
    for (let [color, n] of this.props.details) {
      details.push(<DetailItem colorInd={Number(color)} key={color} n={n} />);
    }
    return (
      <section className="shopping-list">
        <h4 className="list-head">
          {this.props.details.size
            ? "To rebuild your design you will need flat round 1x1 lego tiles (design number 35381):"
            : "Make your own lego mosaic design!"}
        </h4>
        <ul className="details-list">{details}</ul>
      </section>
    );
  }
}

export default DetailsList;
