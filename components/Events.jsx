const Events = () => {
  return (
    <div className="container mx-auto my-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Notifications Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Notifications</h2>
        <div className="overflow-y-auto h-64 border rounded-lg p-4 bg-gray-50">
          {/* Example Notification */}
          <p className="text-gray-700 mb-2">No notifications available.</p>
          {/* Add dynamic notifications here */}
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 animate-slide-up">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Events, Workshops, and Seminars
        </h2>
        <ul className="space-y-4">
          {/* Example Event */}
          {[
            {
              date: "29 OCT, 2024",
              title:
                "Workshop on Crafting your Career: Communication and Etiquette Essentials",
            },
            {
              date: "23 AUG, 2024",
              title: "One-week Course on Python",
            },
            {
              date: "23 AUG, 2024",
              title: "Placement Drive by CarWale",
            },
            {
              date: "18 JUL, 2024",
              title: "Placement Drive with Bharat Electronics Limited (BEL)",
            },
            {
              date: "1 JUL, 2024",
              title: "Placement Drive by Vichaarak",
            },
          ].map((event, index) => (
            <li key={index} className="flex items-center">
              <div className="bg-blue-900 text-white text-center w-16 h-16 flex flex-col justify-center rounded-lg shadow-md">
                <span className="text-lg font-bold">{event.date.split(" ")[0]}</span>
                <span className="text-sm">{event.date.split(" ")[1]}</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {event.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
        <a
          href="#all-events"
          className="block mt-6 text-red-500 font-semibold hover:underline"
        >
          View All Events...
        </a>
      </div>
    </div>
  );
};

export default Events;
