import { BsXLg } from "react-icons/bs";
import Modal from 'react-modal';

Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
export default function DisplayModal({ className, isOpen, onClose, heading, children, }) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}
            overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-dark bg-opacity-50"
            className={`set-bg-dark mx-4 min-w-[14rem] max-w-[35rem] sm:min-w-[30rem] rounded-md ${className} outline-none`}>

            <div className="py-2 px-3 flex-between border-b-[1px] border-slate-300 dark:border-slate-200/20">
                <p className="capitalize text-2xl font-bold">{heading}</p>
                <button className="btn-icon w-6 text-balance-hover" onClick={onClose}><BsXLg /></button>
            </div>

            <div className="py-2 px-3">
                {children}
            </div>
        </Modal>
    )
}
