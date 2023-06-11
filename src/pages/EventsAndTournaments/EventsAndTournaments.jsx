import "./EventsAndTournaments.css";

const EventsAndTournaments = () => {
  // Sample event data
  const events = [
    {
      title: "Annual Sports Day",
      date: "April 19, 2023",
      location: "Main Stadium",
      image:
        "https://desertlakesgolf.com/wp-content/uploads/2023/04/Desert-Lakes-The-Crew-1-1080x675.png",
      description:
        "Join us for our exciting annual sports day event! Students will compete in various sports and showcase their skills.",
    },
    {
      title: "Football Tournament",
      date: "July 8-10, 2023",
      location: "Academy Football Grounds",
      image:
        "https://img.freepik.com/premium-vector/soccer-football-stadium-field-with-ball-lights_8071-1095.jpg",
      description:
        "Participate in our inter-school football tournament and compete against the best teams in the region.",
    },
    {
      title: "Cricket Tournament",
      date: "July 12-20, 2023",
      location: "Academy Cricket Grounds",
      image:
        "https://img.freepik.com/premium-vector/live-cricket-tournament-match-background_30996-5842.jpg",
      description:
        "Participate in our inter-school cricket tournament and compete against the best teams in the region.",
    },
    // Add more events as needed
  ];

  return (
    <section>
      <h2 className="slider-title text-3xl text-center my-10 font-semibold">
        Events and Tournaments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {events.map((event, index) => (
          <div key={index} className="event-card ml-8 md:ml-14">
            <div>
              <img
                className="object-cover w-full h-[200px]"
                src={event.image}
                alt=""
              />
            </div>
            <h3 className="font-bold text-rose-500 my-3">{event.title}</h3>
            <p className="font-semibold">Date: {event.date}</p>
            <p className="font-bold">Location: {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsAndTournaments;
