import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
function Home() {
//   useEffect(() => {
//     // Add event listener to handle cleanup on component unmount
//     document.body.style.overflow = 'hidden';

//     // Cleanup function
//     return () => {
//       document.body.style.overflow = ''; // Revert back to the default
//     };
//   }, []);

const navigate=useNavigate('');
// const user=useSelector(selectUser); 
const hello=()=>{
    navigate('/signup')
}

  return (
    <>
      <Navbar />
      <div className="flex bg-neutral-800 h-screen">
        <div className="w-1/2 h-full p-4 fixed-center">
          <h1 className="text-rose-500 mt-20 text-6xl font-serif">
            <b>Welcome to <span className="text-black-200">EduAid</span></b>
          </h1>
          <h1 className="text-white mt-40 mb-20 text-2xl">
            “The more that you read, the more things you will know, the more that you learn, the more places you’ll go.” —Dr. Seuss
          </h1>
          <div>
            <button onClick={hello} type="button" className="mt-50 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
              Get started
            </button>
          </div>
        </div>
        <div className="w-1/2 h-auto p-4">
          <img
            className="h-50"
            src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=740&t=st=1706003410~exp=1706004010~hmac=d0dd794e0a90da2c877ad362cd3215ec996a66c683d9623fa8fea7afa42ca762"
            alt="Learning concept"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
