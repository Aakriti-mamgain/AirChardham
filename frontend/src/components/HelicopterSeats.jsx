import React from "react";

const HelicopterSeats = () => {
  return (
    <div className="w-full md:w-3/4 mx-auto p-4">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
        Helicopter Seats Live Availability
      </h2>
      <div className="w-full overflow-hidden rounded-lg shadow-lg border border-gray-300">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS8OoxEXuUn9BWQ-ABFj-AuUhZwyJ9Suq3TL-5l9rF5AhZiFuFW-Wl6dSCvxlcHaEIB8IJhpFrrl3_K/pubhtml?widget=true&headers=false"
          className="w-full h-[400px] md:h-[450px] lg:h-[500px] border-none"
          title="Helicopter Seat Availability"
        ></iframe>
      </div>
    </div>
  );
};

export default HelicopterSeats;
