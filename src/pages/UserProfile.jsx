import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRepos, getUser } from '../apis/githubApi';
import UserCard from "../components/UserCard";

const UserProfile = () => {

    const {username} = useParams();
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const[repos, setRepos] = useState([]);

    const url = "https://api.github.com"


    useEffect(() => {
       const fetchData = async() => {
        try{
            setLoading(true);

            const userData = await getUser(username);
            const repoData = await getRepos(username);

            setUser(userData);
            setRepos(repoData);
        }catch(err){
            console.log("error", err);
            setError("User not found!!");
        }finally{
            setLoading(false);
        }
       }

       fetchData();

    }, [username])

    if(loading) return <p className='text-center mt-10'>Loading...</p>

    if(error) return <p className='text-center mt-10 text-red-500
    font-bold text-2xl'>{error}</p>

  return (
    <div className='min-h-screen   bg-gray-100 p-6'>

        <div className='max-w-6xl mx-auto grid md:grid-cols-3l gap-6'>
        {/* left box */}
        <div className='flex bg-white p-6 rounded-lg shadow'>
            <img 
            src={user.avatar_url}
            className="w-32 h-32 rounded-full" />
            
             
             <p className='text-center text-gray-600'>{username.bio}</p>

             <div className='flex flex-col justify-between mt-4 text-sm mx-8'>
                <h2 className='text-xl sm:text-lg font-bold text-center mt-4'>
                {user.name}
                </h2>
                <span>👥{user.followers} Followers</span>
                <span>➡️{user.following} Following</span>
             </div>

        </div>

        {/* right box */}

        <div className='md:col-span-2 space-y-4'>
         {repos.map((repo) => (
  <UserCard key={repo.id} user={repo} />
))}
        </div>

        </div>
      
    </div>
  )
}

export default UserProfile
