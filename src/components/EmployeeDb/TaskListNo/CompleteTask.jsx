import React, { useState } from "react";
import ShowLists from "./ShowLists";
const CompleteTask = ({ completedCount }) => {
  const [show, setShow] = useState(false);

  const completedTasks =
    completedCount?.filter((task) => task.Status &&  task.Status.status_name === "completed") || [];

  return (
    <>
      {/* COMPLETED TASK CARD */}
      <div
        onClick={() => setShow(true)}
        className="flex flex-col gap-1 p-6 cursor-pointer
                   bg-green-500 hover:bg-green-600
                   rounded-2xl transition-all duration-200"
      >
        <h2 className="text-4xl font-bold text-white">
          {completedTasks.length}
        </h2>
        <h3 className="text-xl font-semibold text-white">Completed Tasks</h3>
      </div>

      {/* BACKDROP */}
      {show && (
        <div
          onClick={() => setShow(false)}
          className="fixed inset-0 z-40
                     bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* POPUP */}
      {show && (
        <ShowLists
          setShow={setShow}
          showTasks={completedTasks}
          title="Completed Tasks"
          subtitle="completed tasks"
        />
      )}
    </>
  );
};

export default CompleteTask;
