const CreateTask = () => {
  return (
    <div>
      <div>
        <form className="flex justify-between p-16 border rounded-lg mt-5">
          <div>
            <h3 className="text-xl font-semibold">Task title</h3>
            <input
              type="text"
              placeholder="Make a UI design "
              className="h-[2.8rem] w-[100%] pr-36 pl-3 text-white rounded-lg mt-2 bg-transparent border outline-none"
            />
            <h3 className="text-xl font-semibold">Date</h3>
            <input
              type="date"
              className="h-[2.8rem] w-[100%] pr-36 pl-3 text-white rounded-lg mt-2 bg-transparent border outline-none"
            />
            <h3 className="text-xl font-semibold">Assign to</h3>
            <input
              type="text"
              placeholder="Abbas"
              className="h-[2.8rem] w-[100%] pr-36 pl-3 text-white rounded-lg mt-2 bg-transparent border outline-none"
            />
            <h3 className="text-xl font-semibold">Category</h3>
            <input
              type="text"
              placeholder="UI design"
              className="h-[2.8rem] w-[100%] pr-36 pl-3 text-white rounded-lg mt-2 bg-transparent border outline-none"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Description</h3>
            <textarea
              className="h-[15rem] w-[100%] pr-36 pl-1 text-white bg-transparent border rounded-lg mt-2 outline-none "
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
            ></textarea>
            <button
              className="bg-green-600 py-2 px-4 rounded-md mt-5"
              type="submit"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
