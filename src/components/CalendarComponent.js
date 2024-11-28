import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = (slotInfo) => {
    const title = prompt("Enter Event or Reminder:");
    if (title) {
      setEvents([...events, { start: slotInfo.start, end: slotInfo.end, title }]);
    }
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      selectable
      onSelectSlot={handleSelectSlot}
      style={{ height: 500 }}
    />
  );
};

export default CalendarComponent;
