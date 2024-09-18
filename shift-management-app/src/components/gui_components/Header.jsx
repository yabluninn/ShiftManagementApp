import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-today-block">
          <i className="hgi-stroke hgi-clock-01"></i>
          <p className="header-today-info">{new Date().toLocaleDateString()}</p>
        </div>
        <p className="header-current-page">Calendar</p>
        <div className="header-menu-block">
          <button className="menu-button">
            <i className="hgi-stroke hgi-calendar-03"></i>
          </button>
          <button className="menu-button">
            <i className="hgi-stroke hgi-briefcase-03"></i>
          </button>
          <button className="menu-button">
            <i className="hgi-stroke hgi-analytics-01"></i>
          </button>
          <button className="user-button">
            <i className="hgi-stroke hgi-user"></i>
          </button>
        </div>
      </header>
    </>
  );
}
