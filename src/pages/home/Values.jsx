import { useContext } from "react";
import DataContext from "../../context/DataContext";

export default function Values({ id, attend, lec, percent, }) {
    const { addAttendance, removeAttendance, addLecture, removeLecture } = useContext(DataContext);

    const boardClass = "block flex-1 p-2 flex-grow set-bg flex-center text-center font-bold rounded-md"
    return (
        <div className="flex gap-1 w-fulls">
            <div className="px-2 flex-center flex-col flex-1 set-bg text-center font-bold rounded-md">{percent}%<div className="text-xs font-normal text-balance">lecture Attended</div></div>

            <div className="flex flex-col gap-1">
                <span className={boardClass}>{attend}<span className="block text-xs font-normal text-balance">Attendence</span></span>
                <div className="flex gap-1">
                    <button className="btn-outline py-1" onClick={() => removeAttendance(id)}><span className="icon-box w-4">-</span></button>
                    <button className="btn-outline py-1" onClick={() => addAttendance(id)}><span className="icon-box w-4">+</span></button>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <span className={boardClass}>{lec}<span className="block text-xs font-normal text-balance">Lecture</span></span>
                <div className="flex gap-1">
                    <button className="btn-outline py-1" onClick={() => removeLecture(id)}><span className="icon-box w-4 stroke-2">-</span></button>
                    <button className="btn-outline py-1" onClick={() => addLecture(id)}><span className="icon-box w-4">+</span></button>
                </div>
            </div>
        </div>
    )
}
