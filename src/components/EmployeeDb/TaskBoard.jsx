import DueNewTasks from "./TaskBoard/DueNewTasks";
import DueActiveTasks from "./TaskBoard/DueActiveTasks";

const TaskBoard = ({ activeTasks, onComplete, newTasks, onStart }) => {
  
  return (
    <>
      <div className="px-2">
        <DueActiveTasks
          activeTasks={activeTasks}
          onComplete={onComplete}
        />
        <DueNewTasks
          newTasks={newTasks}
          onStart={onStart}
        />
      </div>
    </>
  );
};

export default TaskBoard;
