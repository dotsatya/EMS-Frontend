import React from "react";

const ShowLists = ({ title, subtitle, showTasks, setShow }) => {
  return (
    <div
      className="fixed z-50 top-1/2 left-1/2 
                     -translate-x-1/2 -translate-y-1/2
                     w-[90%] md:w-[60%] lg:w-[40%]
                     bg-white/80 dark:bg-black/70
                     border border-gray-300 dark:border-gray-600
                     backdrop-blur-2xl
                     rounded-2xl p-6 shadow-2xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {title} ({showTasks.length})
        </h2>
        <button
          onClick={() => setShow(false)}
          className="px-3 py-1 rounded-lg 
                         bg-red-500 text-white
                         hover:bg-red-600"
        >
          Close
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {showTasks.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No {subtitle} 🎉</p>
        ) : (
          showTasks.map((task) => (
            <div
              key={task.id}
              className="p-3 rounded-xl
                             bg-white dark:bg-gray-900
                             shadow"
            >
              <p className="font-semibold text-gray-800 dark:text-white">
                {task.title}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowLists;