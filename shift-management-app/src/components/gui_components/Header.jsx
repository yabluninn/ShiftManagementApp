import "./Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-today-block">
          <p className="header-today-title">Сьогодні</p>
          <p className="header-today-info">{new Date().toLocaleDateString()}</p>
        </div>
      </header>
    </>
  );
}
