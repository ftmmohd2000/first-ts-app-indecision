import React, { useContext } from "react";
import Option from "./Option";

interface Props {
  options: string[];
  handleDeleteOptions: () => void;
}

const Options = ({ options, handleDeleteOptions }: Props): JSX.Element => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button onClick={handleDeleteOptions} className="button button--link">
          Remove all
        </button>
      </div>
      {!options.length && (
        <p className="widget__message">
          Please enter some options to get started
        </p>
      )}
      {options.map((option, index) => (
        <Option key={index} text={option} count={index + 1} />
      ))}
    </div>
  );
};

export default Options;
