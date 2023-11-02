import { createContext, useContext, useEffect, useState } from "react"

const DataContext = createContext()

// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("data.attendence")) || []);
    const [displayData, setDisplayData] = useState(data);

    // UPDATE DISPLAY DATA 
    const updateDisplayData = (id, updateFunction) => {
        setDisplayData((prevData) =>
            prevData.map((item) => {
                if (item.id === id) {
                    return updateFunction(item);
                }
                return item;
            })
        );
    };

    // UPDATE TIME
    const updateTime = () => {
        const updatedData = displayData.map((item) => {
            const cloneItem = data.find((dataItem) => item.id === dataItem.id);
            if (cloneItem && (item.lecture !== cloneItem.lecture || item.attendance !== cloneItem.attendance)) {
                return { ...item, updatedTime: Date.now() };
            }
            return item;
        });
    
        // Update 'data' with the updatedData
        setData(updatedData);
    
        // Update 'displayData' as well if necessary
        setDisplayData(updatedData);
    };



    // ADD SUBJECT
    const handleAddSubject = (sub) => {
        const newData = { id: Date.now(), subject: sub, attendance: 0, lecture: 0, percentage: 100, updatedTime: Date.now() }
        setData([...data, newData]);
    }
    // HANDLE PERCENTAGE CHANGE ////////////////
    const calcPercentage = (id) => {
        updateDisplayData(id, (item) => {
            if (item.lecture > 0) {
                const percent = ((item.attendance / item.lecture) * 100).toFixed(2);
                return { ...item, percentage: percent };
            }
            return item;
        });
    };
    // ADD ATTENDENCE ////////////////
    const addAttendance = (id) => {
        updateDisplayData(id, (item) => {
            if (item.attendance < item.lecture) {
                return { ...item, attendance: item.attendance + 1 };
            }
            return item;
        });
        calcPercentage(id);
    };
    // SUBTRACT ATTENDENCE ////////////////
    const removeAttendance = (id) => {
        updateDisplayData(id, (item) => {
            if (item.attendance > 0) {
                return { ...item, attendance: item.attendance - 1 };
            }
            return item;
        });
        calcPercentage(id);
    };
    // ADD LECTURE ////////////////
    const addLecture = (id) => {
        updateDisplayData(id, (item) => {
            return { ...item, lecture: item.lecture + 1 };
        });
        calcPercentage(id);
    };
    // SUBTRACT LECTURE ////////////////
    const removeLecture = (id) => {
        updateDisplayData(id, (item) => {
            if (item.lecture > 0) {
                return { ...item, lecture: item.lecture - 1 };
            }
            return item;
        });
        calcPercentage(id);
    };
    // DELETE SUBJECT ////////////////
    const removeSubject = (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    }
    // HANDLE SUBMIT ////////////////
    const handleSubmit = () => {
        updateTime();
    }

    useEffect(() => {
        localStorage.setItem("data.attendence", JSON.stringify(data));
        setDisplayData(data);
    }, [data])

    const contextValue = {
        data,
        setData,
        displayData,
        handleAddSubject,
        removeSubject,
        addAttendance,
        removeAttendance,
        addLecture,
        removeLecture,
        handleSubmit
    }

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;