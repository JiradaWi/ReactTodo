'use client'

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";


const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>("");

    const handleSubmitTodo: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log("New Task Value:", newTaskValue);
        setNewTaskValue('');
    };

    return (
    <div>   
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setModalOpen(true)}
        >
            Add New Task 
            <AiOutlinePlus size={20} className="ml-2" />
        </button>

        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
            <form onSubmit={handleSubmitTodo}>
                <h2 className="font-bold text-lg">Create New Task</h2>
                <div className="modal-action">
                    <input type="text"
                    placeholder="Type here"
                    value={newTaskValue}
                    onChange={(e) => setNewTaskValue(e.target.value)}
                    className="input input-bordered w-full max-w-xs"/>

                    <button type="submit" className="btn btn-primary">
                        Create Task
                    </button>
                </div>
            </form>
        </Modal>
    </div>
    
    );
}

export default AddTask;