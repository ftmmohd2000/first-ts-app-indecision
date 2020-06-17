import React from "react";
import Modal from "react-modal";

interface Props {
  selectedOption: string | undefined;
  closeModal: () => void;
}

const OptionModal = ({ selectedOption, closeModal }: Props) => {
  return (
    <Modal
      isOpen={!!selectedOption}
      onRequestClose={closeModal}
      closeTimeoutMS={200}
      className="modal"
      contentLabel="SelectedOption"
    >
      <h3 className="modal__title">Selected Option</h3>
      <p className="modal__body">{selectedOption}</p>
      <button className="button" onClick={closeModal}>
        Okay
      </button>
    </Modal>
  );
};

export default OptionModal;
