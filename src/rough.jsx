const updateDisplayData = (newData) => {
    setDisplayData(newData);
    localStorage.setItem("data.attendance", JSON.stringify(newData));
};

// const updateItemInDisplayData = (id, updateFunction) => {
//     setDisplayData((prevData) =>
//         prevData.map((item) => {
//             if (item.id === id) {
//                 return updateFunction(item);
//             }
//             return item;
//         })
//     );
// };

// const calcPercentage = (id) => {
//     updateItemInDisplayData(id, (item) => {
//         if (item.lecture > 0) {
//             const percent = ((item.attendance / item.lecture) * 100).toFixed(2);
//             return { ...item, percentage: percent };
//         }
//         return item;
//     });
// };