import { useContext, useState } from "react"
import DataContext from "../../context/DataContext";
import Values from "./Values";
import { BsX } from "react-icons/bs";
import CustomModal from '../../components/ui/CustomModal';
import formatTime from "../../helper/formatTime";

export default function Attendence() {
  const { data, displayData, removeSubject, handleSubmit } = useContext(DataContext);

  // DELETE SUBJECT MODAL
  const [deleteSubModal, setDeleteSubModal] = useState(false);
  const [deleteSubId, setDeleteSubId] = useState(null);
  const openModal = () => { setDeleteSubModal(true) };
  const closeModal = () => { setDeleteSubModal(false) };
  const handleDeleteSubject = (id) => {
    removeSubject(id)
    closeModal();
  }

  const handleDataSubmit = async ()=>{
    await handleSubmit()
  }

  return (
    <>
      {/* DELETE SUBJECT MODAL */}
      <CustomModal isOpen={deleteSubModal} onClose={() => setDeleteSubModal(false)} heading="Delete Subject">
        <p className="mb-2">Are you sure!!! You want to delete this subject</p>
        <div className="pt-2 flex flex-wrap items-top gap-2 justify-end border-t-[1px] border-slate-300 dark:border-slate-200/20">
          <button className="btn-outline" onClick={() => setDeleteSubModal(false)}>Cancel</button>
          <button className="btn-danger" onClick={() => { handleDeleteSubject(deleteSubId) }} >Delete</button>
        </div>
      </CustomModal>


      <div className="mt-4 flex flex-col gap-4">

        <div className="flex flex-col gap-4 h-full w-full">
          {displayData.map(item => {
            return (
              <div key={item.id} className="relative p-2 w-full flex flex-col gap-1 set-bg-light rounded-md">
                <div className="px-2 py-[1px] flex-between gap-2 set-bg rounded">
                  <span className="text font-bold break-words break-all hyphens-auto">{item.subject}</span>
                  <span>
                    <div className="btn-danger p-0 w-4 h-4 rounded-sm flex-center"
                      onClick={() => { openModal(); setDeleteSubId(item.id); }}><BsX /></div>
                  </span>
                </div>
                <Values attend={item.attendance} lec={item.lecture} percent={item.percentage} id={item.id} />
                <p className="px-2 py-[1px] flex gap-2 set-bg rounded text-sm">
                  {/* <span>Updated On: </span> <span> {item.updatedTime}</span> */}
                  <span>Updated On: </span> <span> {formatTime(item.updatedTime)}</span>
                  {/* <span>Updated On: </span> <span> {console.log(item.updatedTime)}</span> */}
                </p>
              </div>
            )
          })}
          {data !== displayData &&
            <button className="btn-soft border" onClick={handleDataSubmit}>Update Changes</button>
          }

        </div>
      </div>
    </>
  )
}