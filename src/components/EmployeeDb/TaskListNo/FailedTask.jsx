import { useState } from "react";
import ShowLists from "./ShowLists";

const FailedTask = ({ failedCount }) => {
  const [show, setShow] = useState(false);

  const failedTasks =
    failedCount?.filter((task) => task.Status &&  task.Status.status_name === "failed") || [];

  return (
    <>
      {/* FAILED TASK CARD */}
      <div
        onClick={() => setShow(true)}
        className="flex flex-col gap-1 p-6 cursor-pointer
                   bg-red-500 hover:bg-red-700
                   rounded-2xl transition-all duration-200"
      >
        <h2 className="text-4xl font-bold text-white">{failedTasks.length}</h2>
        <h3 className="text-xl font-semibold text-white">Failed Tasks</h3>
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
          showTasks={failedTasks}
          title="Failed Tasks"
          subtitle="failed task"
        />
      )}
    </>
  );
};

export default FailedTask;
