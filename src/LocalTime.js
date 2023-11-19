import React from "react";

export default function LocalTime(props) {
  return (
    <div>
      <span>Local time: GMT {props.timezone / 3600} :00</span>
    </div>
  );
}
