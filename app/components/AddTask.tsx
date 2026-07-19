import { AiOutlinePlus } from "react-icons/ai";


const AddTask = () => {
    return (
    <div>   
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Task 
            <AiOutlinePlus size={20} className="ml-2" />
        </button>
    </div>
    
    );
}

export default AddTask;