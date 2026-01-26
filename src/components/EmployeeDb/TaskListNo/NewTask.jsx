import { useState } from "react";
import ShowLists from "./ShowLists";

const NewTask = ({ newTasksCount }) => {
  const [show, setShow] = useState(false);

  const newTasks = newTasksCount?.filter((task) => task.Status &&  task.Status.status_name === "new") || [];

  return (
    <>
      {/* NEW TASK CARD */}
      <div
        onClick={() => setShow(true)}
        className="flex flex-col gap-1 p-6 cursor-pointer
                   bg-blue-500 hover:bg-blue-600
                   rounded-2xl transition-all duration-200"
      >
        <h2 className="text-4xl font-bold text-white">{newTasks.length}</h2>
        <h3 className="text-xl font-semibold text-white">New Tasks</h3>
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
          showTasks={newTasks}
          title="New Tasks"
          subtitle="new tasks"
        />
      )}
    </>
  );
};

export default NewTask;
