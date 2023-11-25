import React, { useEffect, useState } from 'react'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://github.com/Naim000007')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     }
    //     )
    // },[])
    const [data, setData] = useState({ followers: 0 });

//   useEffect(() => {
//     fetch('https://api.github.com/users/Naim000007')
//       .then((res) => res.json())
//       .then((userData) => {
//         console.log(userData);
//         setData({ followers: userData.followers });
//       })
//       .catch((error) => {
//         console.error('Error fetching GitHub data:', error);
//       });
//   }, []);
     useEffect(()=>{
        fetch('https://api.github.com/users/Naim000007')
        .then (res => res.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })
     },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
    Github Followers: {data.followers} <br />
    Location: {data.location} <br />
    <div className='flex justify-center items-center'>
      <img src={data.avatar_url} alt='' width={300} />
    </div>
  </div>
  
  )
}

export default Github
