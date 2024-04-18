import "../styles.css";
import { displayProject } from "./displayProject";
import {
    createProject,
    openProjectModal,
    closeProjectModal,
} from "../scripts/manageProject";
import { createTask, openTaskModal } from "../scripts/manageTask";

const newProject = document.querySelector("#add-project");
const submitProject = document.querySelector("#project-form");
const closeProject = document.querySelector("#close-project-modal");
const newTaskBtn = document.querySelector("#add-task-btn");
const submitTask = document.querySelector("#submit-task");

newProject.addEventListener("click", () => {
    openProjectModal();
});

submitProject.addEventListener("submit", (e) => {
    e.preventDefault();
    createProject();
});

closeProject.addEventListener("click", () => {
    closeProjectModal();
});

newTaskBtn.addEventListener("click", () => {
    openTaskModal();
});

// submitTask.addEventListener("click", (e) => {
//     e.preventDefault();
//     listTask();
// });

displayProject();
closeProjectModal();
