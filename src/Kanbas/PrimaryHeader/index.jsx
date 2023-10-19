import "./index.css";

function PrimaryHeader({ children }) {
  return (
    <header className="primary-header">
      <div className="primary-header__inner">{children}</div>
      <hr />
    </header>
  );
}

export default PrimaryHeader;
