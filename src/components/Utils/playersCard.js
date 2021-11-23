import React from "react";

const PlayersCard = (props) => {
  return (
    <div className="player_card_wrapper">
      <div
        className="player_card_thmb"
        style={{
          background: `#f2f9ff
      url(${props.bck}) `,
        }}></div>
    </div>
  );
};

export default PlayersCard;
