import React, { useEffect, useState } from "react";
// import LoadingButton from "./LoadingButton";
// import PopButton from "./PopButton";

export default function Pop({ onClickProp, lat, lng }) {
  return (
    <button id="pop" className="ui blue button" onClick={onClickProp}>
      Populate
    </button>
  );
}
