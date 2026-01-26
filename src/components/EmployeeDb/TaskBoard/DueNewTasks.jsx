import React, {  } from "react";
import DueTaskCard from "./DueTaskCard";

const DueNewTasks = ({ newTasks, onStart }) => {
  return (
    <>
      {newTasks.length > 0 && (
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Check out new tasks ...
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {newTasks.map((task) => (
              <DueTaskCard
                key={task.id}
                task={task}
                actionLabel="Start Now"
                onAction={() => onStart(task.id)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DueNewTasks;
