import React from 'react';

interface EventLogProps {
  events: string[];
}

const EventLog: React.FC<EventLogProps> = ({ events }) => {
  return (
    <div className="event-log">
      <h3>Eventos de la Ruleta</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventLog;
