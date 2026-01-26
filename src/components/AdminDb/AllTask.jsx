import TaskStatusBar from "./TaskStatusBar";
import { useState } from "react";
import PopUpAllTaskStatus from "./PopUpAllTaskStatus";

const AllTask = ({ employeesData , setEmployeesData}) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const handleTaskDeleted = (deletedTaskId) => {
    setEmployeesData(prevData =>
      prevData.map(emp => ({
        ...emp,
        tasks: emp.tasks.filter(task => task.id !== deletedTaskId)
      }))
    );
  };
  // console.log(tasks);
 const handleTaskUpdated = (updatedTask) => {
       setEmployeesData(prevData =>
         prevData.map(emp => ({
            ...emp,
            tasks: emp.tasks.map(task =>
             task.id === updatedTask.id ? updatedTask : task
           )
         }))
       );
     };

  return (
    <>
      <div className=" flex flex-row items-center justify-center">
        <table className=" w-full sm:w-[95%] md:w-[90%] lg:w-[85%] table-fixed border-separate border-spacing-y-2">
          <thead>
            <tr className=" backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70 border border-gray-200/60 dark:border-zinc-700/60  text-xs sm:text-sm  font-semibold  uppercase  tracking-wide  text-gray-700 dark:text-gray-300 ">
              <th className="lg:w-[10%] hidden lg:table-cell md:table-cell px-6 py-3 text-center rounded-bl-xl">E ID</th>
              <th className="lg:w-[40%] px-6 py-3 text-center ">Name</th>
              <th className="lg:w-[20%] px-6 py-3 text-center">Total Tasks</th>
              <th className="hidden lg:table-cell lg:w-[20%] pl-3 px-6 py-3 text-center wrap-break-word ">Completed</th>
              <th className="px-6 py-3  lg:w-[10%]  text-center rounded-br-xl ">Details</th>
            </tr>
          </thead>

          <tbody>
            {employeesData.map((empData, idx) => (
              <TaskStatusBar
                key={idx}
                empData={empData}
                onView={() => setSelectedEmployee(empData)}
              />
            ))}
          </tbody>

        </table>

      </div>

      {selectedEmployee && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setSelectedEmployee(null)}
          />
          <PopUpAllTaskStatus
            selectedEmpTasks={selectedEmployee}
            onClose={() => setSelectedEmployee(null)}
            onTaskDeleted={handleTaskDeleted}
            onTaskUpdated={handleTaskUpdated}
          />
        </>
      )}
    </>
  );
};

export default AllTask;
