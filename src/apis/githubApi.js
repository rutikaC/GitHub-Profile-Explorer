
const BASE_URL = "https://api.github.com";


export const getUser = async (username) => {
    const res = await fetch(`${BASE_URL}/users/${username}`)
    console.log(res)
    if(!res.ok){
        throw new Error("User not found");
    }

    return  res.json();
}

export const getRepos = async (username) => {
    const res = await fetch(`${BASE_URL}/users/${username}/repos`);

    if(!res.ok){
        throw new Error("Repos not found");
    }
    return res.json();
}