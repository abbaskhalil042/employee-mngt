import Header from "../Others/Header";
import TaskListsNumbers from "../Others/TaskListsNumbers";
import TaskList from "../TaskLists/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-5">
      
      <Header />
      <TaskListsNumbers/>
      <TaskList />

    </div>
  );
};

export default EmployeeDashboard;
