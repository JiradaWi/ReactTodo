import { useEffect, useRef } from "react";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (modalOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [modalOpen]);

    return (
        <dialog 
            ref={dialogRef} 
            className="modal"
            onClose={() => setModalOpen(false)}
        >
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                    <button className="btn" onClick={() => setModalOpen(false)}>
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;