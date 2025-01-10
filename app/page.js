"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Task title cannot be empty!");
      return;
    }

    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const renderTask =
    mainTask.length > 0 ? (
      mainTask.map((t, i) => (
        <li
          key={i}
          className="flex items-center justify-between mb-5 p-4 bg-white shadow rounded-md"
        >
          <div className="flex items-center justify-between w-full">
            <h5 className="text-2xl font-bold w-2/5 text-green-700">
              {t.title}
            </h5>
            <h6 className="text-lg font-medium text-gray-600 w-3/4">
              {t.desc || "No Description"}
            </h6>
            <button
              onClick={() => deleteHandler(i)}
              className="bg-red-500 hover:bg-red-600 text-white rounded font-bold px-4 py-2"
            >
              Delete
            </button>
          </div>
        </li>
      ))
    ) : (
      <h2 className="text-center text-xl text-gray-500">No Task Available</h2>
    );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 text-3xl font-bold text-center">
        Todo List
      </header>

      {/* Task Input Section */}
      <main className="flex-grow">
        <form onSubmit={submitHandler} className="p-8 ">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="text"
              className="text-xl border-zinc-800 border-2 px-4 py-2 w-full sm:w-1/3"
              placeholder="Enter Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="text-xl border-zinc-800 border-2 px-4 py-2 w-full sm:w-1/3"
              placeholder="Enter Description (Optional)"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className="bg-green-600 hover:bg-green-700 text-white text-xl px-4 py-2 rounded">
              Add Task
            </button>
          </div>
        </form>

        {/* Tasks Section */}
        <div className="p-8 bg-slate-200">
          <ul>{renderTask}</ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white p-4 text-xl font-bold text-center">
        Stay organized, stay productive!
      </footer>
    </div>
  );
};

export default page;
