import SelectedDayPopup from "../../components/gui_components/popups/SelectedDayPopup";
import "./Calendar.css";

import { useState, useEffect } from "react";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("month");
  const [isWeekdaysVisible, setWeekdaysVisibility] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [isSelectedDayPopupOpen, setSelectedDayPopupOpen] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    renderCalendar();
  }, [date, selectedDate, viewMode]);

  const renderCalendar = () => {
    const calendarDates = document.getElementById("calendar-dates");
    const currentMonth = document.getElementById("current-month");

    calendarDates.innerHTML = "";

    const month = date.getMonth();
    const year = date.getFullYear();

    currentMonth.innerText = `${months[month]} ${year}`;

    date.setDate(1);

    let firstDayIndex = date.getDay();
    if (firstDayIndex === 0) {
      firstDayIndex = 6;
    } else {
      firstDayIndex -= 1;
    }

    const lastDayIndex = new Date(year, month + 1, 0).getDay();
    const adjustedLastDayIndex = lastDayIndex === 0 ? 6 : lastDayIndex - 1;

    const prevLastDay = new Date(year, month, 0).getDate();
    const lastDay = new Date(year, month + 1, 0).getDate();

    const nextDays = 7 - adjustedLastDayIndex - 1;

    if (viewMode === "month") {
      setWeekdaysVisibility(true);

      for (let x = firstDayIndex; x > 0; x--) {
        const day = document.createElement("div");
        day.classList.add("calendar-date", "disabled");
        day.innerText = prevLastDay - x + 1;
        calendarDates.appendChild(day);
      }

      for (let i = 1; i <= lastDay; i++) {
        const day = document.createElement("div");
        day.classList.add("calendar-date");

        const today = new Date();
        const todayDay = today.getDate();
        const todayMonth = today.getMonth();
        const todayYear = today.getFullYear();

        day.innerText = i;

        if (i === todayDay && year === todayYear && month === todayMonth) {
          day.classList.add("today");
        }

        if (
          i === selectedDate.getDate() &&
          year === selectedDate.getFullYear() &&
          month === selectedDate.getMonth()
        ) {
          day.classList.add("selected");
          day.classList.remove("today");
        }

        day.addEventListener("click", () => {
          handleSelectDate(new Date(year, month, i));
        });

        calendarDates.appendChild(day);
      }

      for (let j = 1; j <= nextDays; j++) {
        const day = document.createElement("div");
        day.classList.add("calendar-date", "disabled");
        day.innerText = j;
        calendarDates.appendChild(day);
      }
    } else if (viewMode === "week") {
      setWeekdaysVisibility(false);

      const startOfWeek = new Date(selectedDate);
      const currentDay = startOfWeek.getDay();
      const distanceToMonday = currentDay === 0 ? 6 : currentDay - 1;
      startOfWeek.setDate(startOfWeek.getDate() - distanceToMonday);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      setStartDate(startOfWeek.toLocaleDateString("uk-UA"));
      setEndDate(endOfWeek.toLocaleDateString("uk-UA"));

      for (let i = 0; i < 7; i++) {
        const day = document.createElement("div");
        day.classList.add("calendar-date");

        const currentDay = new Date(startOfWeek);
        currentDay.setDate(startOfWeek.getDate() + i);

        const dayOfWeek = document.createElement("p");
        dayOfWeek.classList.add("calendar-day-of-week");
        dayOfWeek.innerText = weekdays[i];
        day.appendChild(dayOfWeek);

        const currentDayNumber = document.createElement("p");
        currentDayNumber.textContent = currentDay.getDate();
        day.appendChild(currentDayNumber);

        if (
          currentDay.getDate() === selectedDate.getDate() &&
          currentDay.getMonth() === selectedDate.getMonth() &&
          currentDay.getFullYear() === selectedDate.getFullYear()
        ) {
          day.classList.add("selected");
        }

        if (i === 5 || i === 6) {
          day.classList.add("calendar-date-half");
        } else {
          day.classList.add("calendar-date-full");
        }

        day.addEventListener("click", () => {
          handleSelectDate(currentDay);
        });

        calendarDates.appendChild(day);
      }
    }
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  const handleViewChange = (view) => {
    setViewMode(view);
  };

  const handlePrevWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 7);
    setSelectedDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 7);
    setSelectedDate(newDate);
  };

  const handleSelectDate = (date) => {
    console.log("Selected date: " + date);
    setSelectedDate(date);
    setSelectedDayPopupOpen(true);
  };

  const closeSelectDayPopup = () => {
    setSelectedDayPopupOpen(false);
  };

  return (
    <>
      <div className="calendar-page">
        <div className="calendar-container">
          <div className="calendar-header">
            <div className="calendar-header-block">
              <p id="current-month"></p>
              <div className="calendar-header-buttons">
                <button id="prev-month" onClick={handlePrevMonth}>
                  <i className="hgi-stroke hgi-arrow-left-01"></i>
                </button>
                <button id="next-month" onClick={handleNextMonth}>
                  <i className="hgi-stroke hgi-arrow-right-01"></i>
                </button>
              </div>
            </div>
            <div className="calendar-header-block">
              <div className="calendar-view-buttons">
                <button
                  className={`today-btn ${viewMode === "month" ? "" : ""}`}
                  onClick={() => setSelectedDate(new Date())}
                >
                  Today
                </button>
                <button
                  className={`week-btn ${
                    viewMode === "week" ? "current-view-btn" : ""
                  }`}
                  onClick={() => handleViewChange("week")}
                >
                  Week
                </button>
                <button
                  className={`month-btn ${
                    viewMode === "month" ? "current-view-btn" : ""
                  }`}
                  onClick={() => handleViewChange("month")}
                >
                  Month
                </button>
              </div>
            </div>
          </div>
          <div className="calendar-body">
            <div
              className="calendar-days"
              style={{ display: isWeekdaysVisible ? "flex" : "none" }}
            >
              <div className="calendar-day">Mon</div>
              <div className="calendar-day">Tue</div>
              <div className="calendar-day">Wed</div>
              <div className="calendar-day">Thu</div>
              <div className="calendar-day">Fri</div>
              <div className="calendar-day">Sat</div>
              <div className="calendar-day">Sun</div>
            </div>
            <div
              className="calendar-week-buttons"
              style={{ display: isWeekdaysVisible ? "none" : "flex" }}
            >
              <button onClick={handlePrevWeek}>
                <i className="hgi-stroke hgi-arrow-left-01"></i>
              </button>
              <p className="current-week">
                {startDate} - {endDate}
              </p>
              <button onClick={handleNextWeek}>
                <i className="hgi-stroke hgi-arrow-right-01"></i>
              </button>
            </div>
            <div
              className="calendar-dates"
              id="calendar-dates"
              style={{ marginTop: isWeekdaysVisible ? "0px" : "5px" }}
            ></div>
          </div>
        </div>
        <SelectedDayPopup
          isOpen={isSelectedDayPopupOpen}
          onClose={closeSelectDayPopup}
        />
        <div id="selected-day-popup-root"></div>
      </div>
    </>
  );
}
