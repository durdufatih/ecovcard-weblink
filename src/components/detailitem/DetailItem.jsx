import React from "react";

function DetailItem({ icon, value }) {
  return (
    <div className="detail">
      <div className="item">
        <div className="icon">{icon}</div>
        <div className="value"> {value}</div>
      </div>
    </div>
  );
}

export default DetailItem;
