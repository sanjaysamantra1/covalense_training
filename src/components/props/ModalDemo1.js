import React from 'react'
import Modal from 'react-modal';

export default function ModalDemo1() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </Modal>
    </div>
}
