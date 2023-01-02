import React from "react";
import Modal from 'react-modal';
Modal.setAppElement('#app')
const OptionModal = (props) =>
   (
        <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleModal}
        closeTimeoutMS={200}
        className="modal"
        >
            <h3 className="modal__title">Selected Options</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleModal}>Okay</button>
        </Modal>
    )


export default OptionModal;