import React, { Component } from "react";

export type ErrorType =
  | undefined
  | "Enter valid value to add"
  | "This option already exists";

interface Props {
  handleAddOption: (option: string) => ErrorType;
}
interface State {
  error: ErrorType;
}

class AddOption extends Component<Props, State> {
  state: State = {
    error: undefined
  };

  handleAddOption = (e: any) => {
    e.preventDefault();
    const data: string = e.target.elements.option.value;
    const error: ErrorType = this.props.handleAddOption(data);

    if (!error) e.target.elements.option.value = "";

    this.setState((prevState) => ({ error }));
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input
            className="add-option__input"
            placeholder="Add option here"
            type="text"
            name="option"
          />
          <button className="button">Add</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
