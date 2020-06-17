import React, { useState } from "react";
import Options from "./Options";
import Header from "./Header";
import AddOption, { ErrorType } from "./AddOption";
import Action from "./Action";
import OptionModal from "./OptionModal";
import AppContext from "../context/app-context";

const BlogApp = (props: {}) => {
  const [options, setOptions] = useState(new Array<string>());
  const [selectedOption, setSelectedOption] = useState("");

  const chooseOption = () => {
    const chosen = Math.floor(Math.random() * options.length);
    setSelectedOption(options[chosen]);
    console.log("lol I selected", selectedOption);
  };

  const handleDeleteOption = (optionToRemove: string) => {
    setOptions(options.filter((option) => option !== optionToRemove));
  };
  const handleDeleteOptions = () => {
    setOptions([]);
  };
  const handleAddOption = (newOption: string): ErrorType => {
    if (!newOption) return "Enter valid value to add";
    else if (options.some((option) => option === newOption))
      return "This option already exists";
    else {
      setOptions(options.concat(newOption));
      setSelectedOption("");
    }
  };
  const handleCloseModal = () => {
    setSelectedOption("");
  };

  return (
    <AppContext.Provider value={{ handleDeleteOption }}>
      <Header title="Indecision App" />
      <div className="container">
        <Action hasOptions={!!options.length} chooseOption={chooseOption} />
        <div className="widget">
          <Options
            options={options}
            handleDeleteOptions={handleDeleteOptions}
          />
          <AddOption handleAddOption={handleAddOption} />
        </div>
      </div>
      <OptionModal
        selectedOption={selectedOption}
        closeModal={handleCloseModal}
      />
    </AppContext.Provider>
  );
};

export default BlogApp;
