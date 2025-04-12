import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Video } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MapWithReels = dynamic(() => import("@/components/MapWithReels"), { ssr: false });

export default function HomePage() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 space-y-4">
        <Button 
          variant="ghost" 
          className="w-full justify-start" 
          onClick={() => setCurrentView("home")}
        >
          <Home className="mr-2" /> Home
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start" 
          onClick={() => setCurrentView("map")}
        >
          <MapPin className="mr-2" /> View Map
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start"
        >
          <Video className="mr-2" /> Reels
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {currentView === "home" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl font-bold mb-4">Welcome to CanSpiceItUp</h1>
            <p className="text-lg">Discover the best local eats, travel gems, and hot deals across Canada.</p>
          </motion.div>
        )}

        {currentView === "map" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <MapWithReels />
          </motion.div>
        )}
      </div>
    </div>
  );
}
