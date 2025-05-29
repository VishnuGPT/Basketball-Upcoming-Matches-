import React from 'react'
import { useEffect, useState } from 'react'
import { BalldontlieAPI } from "@balldontlie/sdk";
const apiKey = import.meta.env.VITE_BALLDONTLIE_API_KEY;
const api = new BalldontlieAPI({ apiKey});



const Content = () => {

    const [games, setgames] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
      const fetchapi= async () => {
        try{
            const today = new Date().toISOString().split('T')[0];
            const games = await api.nba.getGames({
               start_date: today,
               per_page: 25,  
            });
            setgames(games.data);
        }catch(error){
            console.error("error fetching api:", error);
        }finally{
            setloading(false);
        }
      }
      fetchapi();
    
    }, [])
    

      if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Upcoming Matches</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upcoming Matches</h1>
      {games.length === 0 ? (
        <p className="text-gray-600">No upcoming matches found.</p>
      ) : (
        games.map((game) => (
          <div
            key={game.id}
            className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="font-semibold">
              {game.home_team.full_name} vs {game.visitor_team.full_name}
            </p>
            <p className="text-gray-600">{new Date(game.date).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Content;
