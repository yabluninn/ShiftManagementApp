import "./App.css";

// import MenuButton from "./components/Button/MenuButton/MenuButton";
import Header from "./components/gui_components/Header";
import Calendar from "./pages/Calendar/Calendar";

export default function App() {
  return (
    <div className="app">
      {/* <nav className="nav-menu">
        <div className="app-logo">
          <img src="../app-icon.png" alt="" />
          Shifter
        </div>
        <div className="nav-buttons">
          <MenuButton
            pageName="Calendar"
            iconClass="hgi-stroke hgi-calendar-03"
            pagePath="/app/home"
          />
        </div>
      </nav> */}
      <main className="app-container">
        <Header />
        <Calendar />
      </main>
    </div>
  );
}
