import { useState, useEffect } from "react";

import goalsImg from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import CourseGoalsList from "./components/CourseGoalsList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem("goals") || "[]");
    setGoals(storedGoals);
  }, []);

  function handleAddGoal(goal: string, description: string) {
    console.log("Add Goal");
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: description,
    };

    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals, newGoal];
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== id);
      localStorage.setItem("goals", JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalsList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
