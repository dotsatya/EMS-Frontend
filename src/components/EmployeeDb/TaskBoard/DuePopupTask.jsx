import React from "react";

const DuePopupTask = ({ task,formattedDate, handleShow, actionLabel, onAction }) => {
  if (!task) return null;

  // ---------- STATUS LOGIC ----------
  const getStatus = () => {
    if (task.status === "completed") return { label: "Completed", color: "green" };
    if (task.status === "failed") return { label: "Failed", color: "red" };
    if (task.status === "active") return { label: "Active", color: "blue" };
    return { label: "New", color: "orange" };
  };

  const status = getStatus();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* MODAL */}
      <div
        className="
          relative w-full max-w-2xl
          rounded-3xl
          bg-white/80 dark:bg-slate-900/80
          backdrop-blur-2xl
          border border-white/30 dark:border-slate-700/50
          shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]
          p-6 sm:p-8
          animate-scaleIn
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => handleShow(false)}
          className="
            absolute top-4 right-4
            w-9 h-9 flex items-center justify-center
            rounded-full
            bg-black/5 hover:bg-black/10
            dark:bg-white/10 dark:hover:bg-white/20
            text-gray-600 dark:text-gray-300
            transition
          "
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {/* CATEGORY */}
            <span className="
              px-3 py-1 text-xs font-semibold rounded-full
              bg-indigo-100 text-indigo-600
              dark:bg-indigo-500/20 dark:text-indigo-400
            ">
              {task.category}
            </span>

            {/* STATUS */}
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full
                ${
                  status.color === "green" &&
                  "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400"
                }
                ${
                  status.color === "red" &&
                  "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400"
                }
                ${
                  status.color === "blue" &&
                  "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                }
                ${
                  status.color === "orange" &&
                  "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400"
                }
              `}
            >
              {status.label}
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
            {task.title}
          </h2>
        </div>

        {/* META INFO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div className="rounded-xl p-4 bg-black/5 dark:bg-white/5">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Due Date
            </p>
            <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200">
              {formattedDate}
            </p>
          </div>

          <div className="rounded-xl p-4 bg-black/5 dark:bg-white/5">
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
             Created By
            </p>
            <p className="mt-1 font-semibold text-slate-800 dark:text-slate-200 wrap-break-word">
              {task.Creator.username || "—"}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Description
          </p>
          <div className="
            max-h-44 overflow-y-auto
            rounded-xl
            bg-black/5 dark:bg-white/5
            p-4
            text-sm leading-relaxed
            text-gray-700 dark:text-gray-300
            wrap-break-word
          ">
            {task.description}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap justify-end gap-3">
          <button
            onClick={() => handleShow(false)}
            className="
              px-5 py-2.5 rounded-xl
              text-sm font-semibold
              bg-gray-200/80 text-gray-800
              hover:bg-gray-300
              dark:bg-slate-800 dark:text-gray-200
              dark:hover:bg-slate-700
              transition
            "
          >
            Close
          </button>

          {!task.completed && (
            <button
              onClick={onAction}
              className="
                px-5 py-2.5 rounded-xl
                text-sm font-semibold
                bg-linear-to-r from-green-500 to-emerald-500
                text-white
                hover:from-green-600 hover:to-emerald-600
                shadow-md
                transition
              "
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DuePopupTask;
