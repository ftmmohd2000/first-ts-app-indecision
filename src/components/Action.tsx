import React from "react";

interface Props {
  hasOptions: boolean;
  chooseOption: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Action = ({ hasOptions, chooseOption }: Props) => {
  return (
    <div>
      <button
        className="big-button"
        disabled={!hasOptions}
        onClick={chooseOption}
      >
        What Should I Do?
      </button>
    </div>
  );
};

export default Action;
