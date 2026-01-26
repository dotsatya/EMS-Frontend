import { useState } from "react";
import ShowLists from "./ShowLists";

const ActiveTask = ({ activeCount }) => {
  const [show, setShow] = useState(false);

  const activeTasks =
    activeCount?.filter((task) => task.Status &&  task.Status.status_name === "active") || [];
    // console.log(activeTasks);

  return (
    <>
      {/* ACTIVE TASK CARD (Always Visible) */}
      <div
        onClick={() => setShow(true)}
        className="flex flex-col gap-1 p-6 cursor-pointer 
                   bg-yellow-500 hover:bg-yellow-600
                   rounded-2xl transition-all duration-200"
      >
        <h2 className="text-4xl font-bold text-white">{activeTasks.length}</h2>
        <h3 className="text-xl font-semibold text-white">Active Tasks</h3>
      </div>

      {/* BACKDROP */}
      {show && (
        <div
          onClick={() => setShow(false)}
          className="fixed inset-0 z-40 
                     bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* POPUP MODAL */}
      {show && (
        <ShowLists
          setShow={setShow}
          showTasks={activeTasks}
          title="Active Tasks"
          subtitle="active tasks"
        />
      )}
    </>
  );
};

export default ActiveTask;
