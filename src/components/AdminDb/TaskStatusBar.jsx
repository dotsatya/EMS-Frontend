const TaskStatusBar = ({ empData, onView }) => {
  const totalTasks = empData.tasks.length;
  const completedTasks = empData.tasks.filter(
    (task) => task.status === "completed"
  ).length;

  return (
    <>
      <tr className=" backdrop-blur-xl  bg-gray-100/70 dark:bg-zinc-900/60 border border-gray-200/60 dark:border-zinc-700/60  shadow-sm  rounded-xl  transition hover:bg-white/80 dark:hover:bg-zinc-900/80">
        {/* TOTAL TASKS */}
        <td className="px-6 py-4 hidden lg:table-cell md:table-cell text-center rounded-l-xl">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            EID{empData.employee.id}
          </p>
        </td>
        {/* NAME */}
        <td className="px-6 py-4 text-center ">
          <p className="text-sm whitespace-normal sm:text-base font-semibold text-gray-800 dark:text-gray-200 truncate">
            {empData.employee.username}
          </p>
        </td>

        {/* TOTAL TASKS */}
        <td className="px-6 py-4 text-center">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {totalTasks}
          </p>
        </td>

        {/* COMPLETED TASKS */}
        <td className="pl-3 px-6 py-4 text-center hidden lg:table-cell">
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            {completedTasks}
          </p>
        </td>
        {/* ✅ ACTION COLUMN */}
        <td className="px-6 py-4 rounded-r-xl text-center">
          <button
            onClick={onView}
            className="w-9 h-7 rounded-full bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20"
          >
            →
          </button>
        </td>
      </tr>
    </>
  );
};

export default TaskStatusBar;
