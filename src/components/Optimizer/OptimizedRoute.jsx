// OptimizedRoute.jsx
import React from "react";

const OptimizedRoute = ({ orders, etaCountdowns }) => {
  // Sort by shortest distance
  const sorted = [...orders].sort((a, b) => a.distance - b.distance);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">🚀 Optimized Delivery Route (Fastest First)</h2>
      <ul className="space-y-2">
        {sorted.map((order) => (
          <li key={order.id} className="bg-white shadow px-4 py-3 rounded flex justify-between items-center">
            <div>
              <span className="font-semibold">{order.customerName}</span> — {order.zone} ({order.distance} km)
            </div>
            <span className="text-sm text-gray-500">
              ETA: {etaCountdowns?.[order.id] ?? order.estimatedDelay} min
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptimizedRoute;