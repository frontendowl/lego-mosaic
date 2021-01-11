import React from "react";

class Tile extends React.PureComponent {
  render() {
    return <div className="tile" style={{ backgroundColor: this.props.rgb }} />;
  }
}
export default Tile;
