import React from "react";
import ActiveTask from "./TaskListNo/ActiveTask";
import NewTask from "./TaskListNo/NewTask";
import CompleteTask from "./TaskListNo/CompleteTask";
import FailedTask from "./TaskListNo/FailedTask";

const TaskListNums = ({ tasksDataCount }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
        <ActiveTask activeCount={tasksDataCount} />
        <NewTask newTasksCount={tasksDataCount} />
        <CompleteTask completedCount={tasksDataCount} />
        <FailedTask failedCount={tasksDataCount} />
      </div>
    </>
  );
};

export default TaskListNums;
