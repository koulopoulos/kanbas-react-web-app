import { useParams } from "react-router";
import SidebarNavigation from "../Navigation/SidebarNavigation";
import courses from "../Navigation/courses.json";

function CourseNavigation() {
  const { courseId } = useParams();

  const links = courses.map((course) => {
    return {
      ...course,
      route: course.route && `/kanbas/courses/${courseId}/${course.route}`,
    };
  });

  return <SidebarNavigation links={links} />;
}

export default CourseNavigation;
