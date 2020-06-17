import React, { useContext } from "react";
import AppContext from "../context/app-context";

interface Props {
  text: string;
  count: number;
}

const Option = ({ text, count }: Props) => {
  const { handleDeleteOption } = useContext(AppContext);

  return (
    <div className="option">
      <p className="option__text">
        {count} . {text}
      </p>
      <button
        onClick={(e) => {
          handleDeleteOption(text);
        }}
        className="button button--link"
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
