import React from "react";

export default function Heatmap() {
  return (
    <div className="w-full flex justify-center py-10">
      <iframe
        src="/postman/heatmap.html"
        className="w-full max-w-5xl h-[700px] rounded-xl shadow-xl border border-gray-700"
        title="Strava Heatmap"
      />
    </div>
  );
}
