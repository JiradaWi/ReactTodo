'use client'

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";


const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
    <div>   
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setModalOpen(true)}
        >
            Add New Task 
            <AiOutlinePlus size={20} className="ml-2" />
        </button>

        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
    
    );
}

export default AddTask;