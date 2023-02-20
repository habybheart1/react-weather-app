import React from "react";

export default function Fulldate(props) {
  let year = props.date.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let numberDate = props.date.getDate();
  if (numberDate < 10) {
    numberDate = `0${numberDate}`;
  }
  return (
    <div>
      {numberDate} {month}
      {","} {year}
    </div>
  );
}
