"use client";

import { Card } from "@/registry/ui/react/card";
import * as React from "react";

export default function HomePage(): JSX.Element {
  return (
    <main className="container">
      <div className="h-full font-sans">
        {/* Left (miroir du côté droit) 
        <div className="absolute w-[125px] h-[100vh] top-0 left-0 overflow-hidden">
          <div
            className="w-[250px] h-[100vh] rounded-[100%_0_0_100%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)] transform scale-x-[-1]"
            style={{
              background:
                "linear-gradient(180deg, rgba(36, 36, 36, 1) 0%, rgba(36, 36, 36, 0.54) 33%, rgba(5, 5, 5, 0.56) 66%, rgba(5, 5, 5, 0) 100%)",
            }}
          ></div>
        </div>
*/}
        {/* Right 
        <div className="absolute w-[125px] h-[100vh] top-0 right-0 overflow-hidden">
          <div
            className="w-[250px] h-[100vh] rounded-[100%_0_0_100%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(36, 36, 36, 1) 0%, rgba(36, 36, 36, 0.54) 33%, rgba(5, 5, 5, 0.56) 66%, rgba(5, 5, 5, 0) 100%)",
            }}
          ></div>
        </div>
        */}
        <section className="flex flex-col items-center py-12 space-y-12">
          <h1 className="text-4xl font-bold text-center">UI Components</h1>
          <p className="text-center text-lg max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full max-w-4xl"></div>
        </section>
      </div>
    </main>
  );
}

// Composant Earnings
const Earnings: React.FC = () => {
  const [earnings, setEarnings] = React.useState(30.0);
  const [points, setPoints] = React.useState(10550);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setEarnings((prev) => prev + Math.random() * 0.1);
      setPoints((prev) => (prev > 0 ? prev - 10 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex flex-col items-center  rounded-lg shadow-lg p-6 w-full md:w-1/3 text-center">
      <h2 className="text-xl font-semibold mb-2">Your earnings</h2>
      <p className="text-3xl font-bold text-blue-500">${earnings.toFixed(2)}</p>
      <p className="text-gray-500">Next payout in: {points} pts</p>
    </Card>
  );
};

// Composant ConnectSources
const ConnectSources: React.FC = () => {
  const sources = [
    { name: "Uber", icon: "🚗" },
    { name: "Spotify", icon: "🎶" },
    { name: "Amazon", icon: "🛒" },
    { name: "Netflix", icon: "📺" },
  ];

  return (
    <Card className="flex flex-col items-center rounded-lg shadow-lg p-6 w-full md:w-1/3 text-center">
      <h2 className="text-xl font-semibold mb-4">Connect sources</h2>
      <div className="flex space-x-4">
        {sources.map((source, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-3xl">{source.icon}</span>
            <p className="text-sm mt-1">{source.name}</p>
          </div>
        ))}
      </div>
      <button className="bg-blue-500 text-white font-semibold mt-4 py-2 px-4 rounded-lg">
        Download on the App Store
      </button>
    </Card>
  );
};

// Composant Insights
const Insights: React.FC = () => {
  const insights = [
    "Any products I should be interested in?",
    "Where do I mostly shop during winter season?",
    "How much money I saved on discounts?",
  ];

  return (
    <Card className="flex flex-col items-center  rounded-lg shadow-lg p-6 w-full md:w-1/3 text-center">
      <h2 className="text-xl font-semibold mb-4">Learn more from your data</h2>
      <div className="space-y-2">
        {insights.map((insight, index) => (
          <p key={index} className="text-gray-700 text-sm">
            {insight}
          </p>
        ))}
      </div>
      <p className="text-blue-500 mt-4 font-semibold">Make better decisions</p>
    </Card>
  );
};
