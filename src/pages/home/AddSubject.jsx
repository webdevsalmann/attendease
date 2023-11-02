import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import toast from "react-hot-toast";

export default function AddSubject() {
    const { handleAddSubject } = useContext(DataContext);
    const [subject, setSubject] = useState("");
    const handleInputChange = (e) => { setSubject(e.target.value) };
    const handleAddSub = () =>{
        if(subject === ""){
            toast.error('Please Enter Subject Name')
        } else {
            handleAddSubject(subject)
        }
    }
    return (
        <div className="flex gap-1">
            <input type="text" value={subject} onChange={handleInputChange} className="px-4 h-8 rounded flex-grow flex-shrink min-w-0 text-dark" placeholder="Add Subject Name or Code" />
            <button className="btn-soft rounded h-8" onClick={handleAddSub}>+ Add</button>
        </div>
    )
    }
