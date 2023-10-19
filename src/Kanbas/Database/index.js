import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";

const db = {
  courses,
  modules,
  assignments,
  getCourseById: (courseId) =>
    courses.find((course) => course._id === courseId),
  getModulesByCourseId: (courseId) =>
    modules.filter((module) => module.course === courseId),
  getAssignmentsByCourseId: (courseId) =>
    assignments.filter((assignment) => assignment.course === courseId),
  getAssignmentById: (assignmentId) =>
    assignments.find((assignment) => assignment._id === assignmentId),
};

export default db;
