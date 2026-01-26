import { useState ,useEffect } from "react";
import {  } from "react";
import CreatTask from "../AdminDb/CreatTask";
import AllTask from "../AdminDb/AllTask";
import { User } from "react-feather";
import { MdOutlineEditNote } from "react-icons/md";
import { getAllTasks } from "../../api/tasks";
import { useCallback } from "react";
// import { socket } from "../../socket";
// import { socket } from "../../socket";

const AdminDb = () => {

  const [employeesData, setEmployeesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllEmps = useCallback(async () => {
    try {
      const res = await getAllTasks();
      setEmployeesData(res);
    } catch (err) {
      console.error(err.response?.data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllEmps();
  }, [fetchAllEmps]);

 
  if (loading) return <p>Loading tasks...</p>;

  return (
    <>
      <div>
        <div className="flex items-center gap-2 p-3 lg:pl-16 pt-6 text-gray-900 dark:text-gray-100 ">
          <MdOutlineEditNote size={40} />
          <h1 className="font-bold text-2xl ">Add New Task For Employee</h1>
        </div>
        <CreatTask onTaskCreated={fetchAllEmps} />
      </div>
      <div className="mt-2 pb-8">
        <div className="flex items-center gap-2 p-3 lg:pl-16 pt-6 text-gray-900 dark:text-gray-100 ">
          <User strokeWidth={3} size={26} />
          <h1 className="font-bold text-2xl ">Employee Task Overview</h1>
        </div>
        <AllTask employeesData={employeesData} setEmployeesData={setEmployeesData} />
      </div>
      {/* <div>Employess FeedBack</div> */}
    </>
  );
};

export default AdminDb;
