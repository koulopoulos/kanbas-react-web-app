import {
  FaUser,
  FaCompass,
  FaBook,
  FaInbox,
  FaClock,
  FaPlay,
  FaArrowRight,
  FaQuestionCircle,
  FaCalendar,
  FaReact,
} from "react-icons/fa";

function NavigationIcon({ name, className }) {
  switch (String(name).toLowerCase()) {
    case "account":
      return <FaUser className={className} />;
    case "dashboard":
      return <FaCompass className={className} />;
    case "courses":
      return <FaBook className={className} />;
    case "calendar":
      return <FaCalendar className={className} />;
    case "inbox":
      return <FaInbox className={className} />;
    case "history":
      return <FaClock className={className} />;
    case "studio":
      return <FaPlay className={className} />;
    case "commons":
      return <FaArrowRight className={className} />;
    case "help":
      return <FaQuestionCircle className={className} />;
    default:
      return <FaReact className={className} />;
  }
}

export default NavigationIcon;
