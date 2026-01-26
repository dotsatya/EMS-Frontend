import React, { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { deleteTask } from "../../api/tasks";
import { useState } from "react";
import { toast } from "react-toastify";
import CreatTask from "./CreatTask";
import { useAuth } from "../../context/AuthContext";
import { socket } from "../../socket";


const EmployeeTasksPopup = ({ selectedEmpTasks, onClose, onTaskDeleted, onTaskUpdated }) => {
  const { user } = useAuth();

  const [localTasks, setLocalTasks] = useState(selectedEmpTasks.tasks);
  const [editingTask, setEditingTask] = useState(null); // State for editing task
  const employee = selectedEmpTasks.employee;

  // Function to get status from statusId and update it on admin side
  const getStatusFromId = (statusId) => {
  switch (statusId) {
    case 1: return "new";
    case 2: return "active";
    case 3: return "completed";
    case 4: return "failed";
    default: return "new";
  }
};

  useEffect(() => {
    const handleTaskStatusUpdated = (data) => {
      const taskExists = localTasks.some(task => task.id === data.taskId);
      if (taskExists) {
        setLocalTasks(prev => prev.map(task =>
          task.id === data.taskId
            ? { ...task, status: getStatusFromId(data.statusId) }
            : task
        ));
        // console.log("Updated task status in popup:", data);
      }
    };

    socket.on("taskStatusUpdated", handleTaskStatusUpdated);

    return () => {
      socket.off("taskStatusUpdated", handleTaskStatusUpdated);
    };
  }, [localTasks]); 
//.......................................

  if (!employee) return null;

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleTaskUpdated = async (updatedTask) => {
    try {
      const updatedTasks = localTasks.map(task =>
        task.id === updatedTask.id ? {
          ...task,
          ...updatedTask,
          created_by: updatedTask.Creator?.username
        } : task
      );
      setLocalTasks(updatedTasks);

      if (onTaskUpdated) {
         onTaskUpdated({
        ...updatedTask,
        created_by: updatedTask.Creator?.username || updatedTask.created_by
      });
      }

      setEditingTask(null);
    }
    catch (error) {
      console.error("Error updating task:", error);
      toast.error(
        error.response?.data?.message || "Failed to update task"
      );
    }

  };


  const handleDelete = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await deleteTask(taskId);
        toast.success("Task deleted successfully!");

        const updatedTasks = localTasks.filter(task => task.id !== taskId);
        setLocalTasks(updatedTasks);

        // parent
        if (onTaskDeleted) {
          onTaskDeleted(taskId);
        }
      } catch (error) {
        console.error("Error deleting task:", error);
        toast.error("Failed to delete task");
      }
    }
  };


  const getStatusStyle = (task) => {
    if (task.status === "completed")
      return "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400";
    if (task.status === "failed")
      return "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400";
    if (task.status === "active")
      return "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400";
    return "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400";
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        {/* MODAL */}
        <div className="   relative w-full max-w-3xl   rounded-3xl   bg-white/80 dark:bg-slate-900/80   backdrop-blur-2xl   border border-white/30 dark:border-slate-700/50  shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)]  p-6 sm:p-8  animate-scaleIn ">
          {/* CLOSE */}
          <button
            onClick={onClose}
            className=" absolute top-4 right-4   w-9 h-9 rounded-full  flex items-center justify-center bg-black/5 hover:bg-black/10  dark:bg-white/10 dark:hover:bg-white/20  text-gray-600 dark:text-gray-300 transition "
          >
            ✕
          </button>

          {/* HEADER */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Employee ID : {employee.id}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {employee.username}
            </h2>
          </div>

          {/* edit form and TASK LIST */}
          {editingTask ? (
            <div className="mb-6">
              <CreatTask
                taskToEdit={editingTask}
                onTaskCreated={handleTaskUpdated}
                onCancelEdit={() => setEditingTask(null)}
              />
            </div>
          ) : (
            <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1 ">
              {localTasks.length === 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400">
                  No tasks assigned
                </p>
              )}

              {localTasks.map((task, index) => (
                <div
                  key={task.id || index}
                  className="  flex gap-4 items-center rounded-2xl bg-black/5 dark:bg-white/5  p-4 "
                >
                  {/* NUMBER */}
                  <div className=" min-w-9 h-9 flex items-center justify-center    rounded-xl font-bold bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 ">
                    {index + 1}
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    {/* TITLE + TIME + STATUS */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 shrink-0">
                        {/* TITLE */}
                        <h3 className="font-semibold text-slate-900 dark:text-white wrap-break-word whitespace-normal">
                          {task.title}
                        </h3>
                        {/* created by */}
                        <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap"> 👤{task.created_by}</span>
                        {/* STATUS */}
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusStyle(
                            task
                          )}`}
                        >
                          {task.status === "completed"
                            ? "Completed"
                            : task.status === "failed"
                              ? "Failed"
                              : task.status === "active"
                                ? "Active"
                                : "New"}
                        </span>
                      </div>
                      {/* TIME */}
                      <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        <span className="text-base">📅</span>
                        {task.due_date}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    {task.description && (
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 break-all whitespace-normal leading-relaxed">
                        {task.description}
                      </p>
                    )}
                  </div>
                  <div className="pl-1 flex flex-col items-center border-l  border-gray-400/20 dark:border-gray-700">
                    {task.created_by === user?.username && (
                      <>
                        <div>
                          {["new", "active"].includes(task.status) && (
                            <button
                              className="p-1 rounded-xl text-blue-500 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-500/20 transition-all duration-200 active:scale-95"
                              title="Edit task"
                              onClick={() => handleEdit(task)}
                            >
                              <FaRegEdit size={16} />
                            </button>
                          )}
                        </div>
                        <div>
                          <button
                            className="p-1 rounded-xl  text-red-500  hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-500/20 transition-all duration-200 active:scale-95"
                            title="Delete task"
                            onClick={() => handleDelete(task.id)}
                          >
                            <MdDeleteForever size={22} />
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                </div>
              ))}
            </div>)}


          {/* FOOTER */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={editingTask ? () => setEditingTask(null) : onClose}
              className="    px-5 py-2.5 rounded-xl    text-sm font-semibold    bg-gray-200/80 text-gray-800    hover:bg-gray-300    dark:bg-slate-800 dark:text-gray-200    dark:hover:bg-slate-700    transition  "
            >
              {editingTask ? "Cancel" : "Close"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeTasksPopup;
