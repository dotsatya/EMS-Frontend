import React from "react";
import DueTaskCard from "./DueTaskCard";

const DueActiveTasks = ({ activeTasks, onComplete }) => {
  return (
    <>
      {activeTasks.length > 0 && (
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Currently working on ...
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {activeTasks.map((task) => (
              <DueTaskCard
                key={task.id}
                task={task}
                actionLabel="Complete"
                onAction={() => onComplete(task.id)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DueActiveTasks;
