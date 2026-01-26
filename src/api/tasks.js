import { socket } from "../socket";
import API from "./api";

// .........ADMIN.........
// Create a new task
export const createTask = async (taskData) => {
  try {
    const res = await API.post("/tasks/create", taskData);
    socket.emit("assignTask", {
      employeeId: taskData.assigned_to,
      taskData: res.data,
    });
    return res.data;
  } catch (error) {
    console.error("Error creating task:", error);
  }
};


// Update a task
 export const updateTask = async (taskId, taskData) => {
  try {
    const res = await API.put(`/tasks/update/${taskId}`, taskData);
    return res.data;
  } catch (error) {
    console.error("Error updating task:", error);
  }
};


// Get all tasks
export const getAllTasks = async () => {
  const res = await API.get("/tasks/all");
  return res.data;
};


// Delete a task
export const deleteTask = async (task_id) => {
  const res = await API.delete("/tasks/delete", { data: { task_id } });
  return res.data;
};


// .........EMPLOYEE........
// Get only employee tasks
export const getEmpTasks = async () => {
  const res = await API.get("/tasks/employee");
  return res.data;
};


// Update task status
export const updateTaskStatus = async (task_id, status_id) => {
  const res = await API.put("/tasks/status", {
    task_id,
    status_id,
  });
  return res.data;
};
