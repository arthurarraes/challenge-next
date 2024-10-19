import { ModalProps } from "@/types";

export default function Modal({open, onClose, children}: ModalProps){



    return(
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors
        ${open? "visible bg-black/20": "invisible"}`}>
            <div onClick={(e)=>{e.stopPropagation()}} className={`bg-white rounded-lg p-6 transition-all ${open ? "scale-100 opacity-100": "scale-125 opacity-0"}`}>
                <button onClick={onClose} className="absolute top-1 right-2 p-1 rounded-lg tet-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">X</button>
                {children}
            </div>
        </div>
    )
}