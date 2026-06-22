

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
   
      if (!username) return;

    navigate(`/user/${username}`);
  };

  return (
        <div className="flex h-[calc(100vh-64px)] items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-xl text-center">

                <h1 className="text-4xl font-bold mb-6 text-gray-800">
                    DevFinder 🔍 
                </h1>

                <div className="flex shadow-lg rounded-lg overflow-hidden bg-white">
                    <input 
                    type="text" 
                    placeholder="Search Github username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 px-4 py-3 outline-none"
                    />
                    <button 
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-6 hover:bg-blue-600 transition">
                        Search
                    </button>
                </div>

            </div>

         
        </div>

  );
}

export default Home
