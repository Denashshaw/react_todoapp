import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function Lists(props) {
  const items = props.items;
  const listItems = items.map((item, index) => {
    return (
      <div key={item.key} className="liClass">
        <span className="paraText">
          <input
            type="text"
            value={item.text}
            className="inputClass"
            onChange={(e) => props.updateHandler(e.target.value, item.key)}
          />
        </span>
        <FontAwesomeIcon
          icon={"trash"}
          className="faicons"
          onClick={() => props.deleteItem(item.key)}
        />
      </div>
    );
  });

  return (
    <>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </>
  );
}

export default Lists;
