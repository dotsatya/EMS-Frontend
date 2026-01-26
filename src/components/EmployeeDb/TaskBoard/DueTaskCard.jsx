import React, { useState } from "react";
import DuePopupTask from "./DuePopupTask";

const DueTaskCard = ({ task, actionLabel, onAction }) => {
  const [show, setShow] = useState(false);


  // ------------------------------for date format------------------------------
  const date = new Date(task.due_date);
  const day = date.getDate();
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getFullYear();
  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const formattedDate = `${day}${getOrdinal(day)} ${month}, ${year}`;
  // ------------------------------for date format------------------------------

  return (
    <>
      <div
        key={task.id}
        className="
            rounded-2xl p-6
            bg-white/70 dark:bg-slate-900/70
            backdrop-blur-xl
            border border-slate-200 dark:border-slate-700
            shadow-sm hover:shadow-lg
            transition-all duration-300
            hover:-translate-y-1
          "
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="
                px-3 py-1 text-xs font-semibold
                rounded-full
                bg-red-100 text-red-600
                dark:bg-red-500/20 dark:text-red-400
              "
          >
            {/* {task.priority} */}
            {task.category}
          </span>

          <time className="text-sm text-gray-500 dark:text-gray-400">
            {formattedDate}
          </time>
        </div>

        <div>
          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {task.title}
          </h3>

          {/* Details */}
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3 wrap-break-word">
            {task.description}
          </p>
        </div>

        <div className="flex flex-row gap-4 pt-3">
          {/* Button */}
          <button
            className=" p-2 px-3 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 "
            onClick={onAction}
          >
            {actionLabel}
          </button>
          <button
            className=" p-2 px-3 text-sm font-semibold bg-blue-500 text-white rounded-lg hover:bg-green-600 "
            onClick={() => setShow(true)}
          >
            Details
          </button>
        </div>
      </div>

      {/* BACKDROP */}
      {show && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setShow(false)}
          />
          <DuePopupTask
            task={task}
            formattedDate={formattedDate}
            handleShow={setShow}
            actionLabel={actionLabel}
            onAction={onAction}
          />
        </>
      )}
    </>
  );
};

export default DueTaskCard;
