import { useState, useRef } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";

function App() {
  const categories = ["Personal", "Work", "Academic"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const inputRef = useRef(null);

  const handleAddIconClick = (category) => {
    setSelectedCategory(category);
    inputRef.current?.focus();
  };

  const [tasks, setTasks] = useState({
    Personal: [],
    Work: [],
    Academic: [],
  });

  const handleAddTask = (taskDescription, category) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: [
        ...prevTasks[category],
        { description: taskDescription, completed: false },
      ],
    }));
  };

  const handleToggleTask = (category, index) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: prevTasks[category].map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    }));
  };

  const handleDeleteCompleted = (category) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [category]: prevTasks[category].filter((task) => !task.completed),
    }));
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          position: "absolute",
          left: "10%",
          right: "10%",
          top: "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          gap: "16px",
          height: "75%",
        }}
      >
        {categories.map((category) => (
          <Category
            key={category}
            title={category}
            tasks={tasks[category]}
            onToggleTask={handleToggleTask}
            onAddTaskClick={() => {
              handleAddIconClick(category);
            }}
            onDeleteCompleted={() => handleDeleteCompleted(category)}
          />
        ))}
      </Box>
      <Footer
        categories={categories}
        onAdd={handleAddTask}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        inputRef={inputRef}
      />
    </>
  );
}

export default App;
