import { useEffect, useState } from "react";
import TaskListNums from "../EmployeeDb/TaskListNums.jsx";
import EmployeeFB from "../EmployeeDb/EmployeeFB.jsx";
import TaskBoard from "../EmployeeDb/TaskBoard.jsx";
import { getEmpTasks, updateTaskStatus } from "../../api/tasks.js";
import { socket } from "../../socket.js";

const EmployeeDb = () => {

  const [empData, setEmpData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [tasks, setTasks] = useState( [] );

  // console.log(tasks);
  // console.log(empData);

  const fetchEmpData = async () => {
    try {
      const res = await getEmpTasks();
      setEmpData(res);
      setTasks(res.AssignedTasks.filter((task, index, arr) => arr.findIndex(t => t.id == task.id) === index));
      // console.log(res);
    } catch (err) {
      console.error(err.response?.data);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEmpData();
  }, []);

  useEffect(() => {
    socket.on("newTaskAssigned", (taskData) => {
      setTasks(prev => {
        const newTasks = [...prev, taskData];
        return newTasks.filter((task, index, arr) => arr.findIndex(t => t.id == task.id) === index);
      });
      console.log("New task assigned:", taskData);
    });

    socket.on("taskUpdated", ({ taskId, taskData }) => {
      setTasks(prev => {
        let updated = prev.map(task =>
          task.id == taskId
            ? { ...task, ...taskData }
            : task
        );
        // If no task was updated, add it
        if (!updated.some(task => task.id == taskId)) {
          updated = [...updated, taskData];
        }
        // Filter unique by id
        return updated.filter((task, index, arr) => arr.findIndex(t => t.id == task.id) === index);
      });
    });

    socket.on("taskDeleted", ({ taskId }) => {
      setTasks(prev =>
        prev.filter(task => task.id !== taskId)
      );
    });

    return () => {
      socket.off("newTaskAssigned");
      socket.off("taskUpdated");
      socket.off("taskDeleted");
    };
  }, []);

  if (loading) return <p>Loading employee tasks...</p>

  if (!tasks) {
    return <div className="text-center">Tasks not found</div>
  }

  if (!empData) {
    return <div>Employee data not found.</div>;
  }

  // const tasks = empData.AssignedTasks;

  async function onComplete(id) {
    try {
      // api call
      await updateTaskStatus(id, 3);

      setTasks((prevTasks) => {
        const updated = prevTasks.map((task) => {
          if (task.id === id) {
            return { ...task, Status: { ...task.Status, status_name: "completed" } }
          }
          return task;
        });
        return updated.filter((task, index, arr) => arr.findIndex(t => t.id == task.id) === index);
      })

    } catch (error) {
      console.error("Update failed", error);
    }
  }

  async function onStart(id) {
    try {
      // api call
      await updateTaskStatus(id, 2);

      setTasks((prevTasks) => {
        const updated = prevTasks.map((task) => {
          if (task.id === id) {
            return { ...task, Status: { ...task.Status, status_name: "active" } }
          }
          return task;
        });
        return updated.filter((task, index, arr) => arr.findIndex(t => t.id == task.id) === index);
      })

    } catch (error) {
      console.error("Start failed", error);
    }
  }

  return (
    <div>
      <div className="pb-40">
        <TaskListNums tasksDataCount={tasks} />
        <TaskBoard
          activeTasks={tasks?.filter((task) =>task.Status &&  task.Status.status_name === "active")}
          onComplete={onComplete}
          newTasks={tasks?.filter((task) =>task.Status &&  task.Status.status_name === "new")}
          onStart={onStart}
        />
      </div>
      <EmployeeFB />
    </div>
  );
};

export default EmployeeDb;
