import React from "react";
import moment from "moment-timezone";

export default function LocalTime(props) {
  const timezone = props.localTime;
  const localTime = moment().tz(timezone);

  console.log(localTime);

  return <div>Local time: {localTime}</div>;
}
