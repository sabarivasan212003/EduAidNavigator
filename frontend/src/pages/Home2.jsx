import { useNavigate } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

function Home2() {
    const navigate=useNavigate()
    const hello=()=>{
        navigate("/login")
    }
    const color = localStorage.getItem('sitecontent');
    console.log(color)
    const isDarkMode = color === 'dark'
    const gradientColor = isDarkMode
        ? 'black'
        : 'white';
    return (
        <>
        <Navbar2 />
        <div className="flex h-screen">
            <div className="w-1/2 h-full p-20 fixed-center">
                {/* Content for the rounded left side */}
                <div className="text-black-200 mt-10 mr-30 text-2xl font-mono">
                    <h1 className="text-3xl"><b>Welcome to EduAid</b></h1>
                <h1 className="mt-5 ">Discover a world of knowledge at EduAid -</h1>
                <h1 className="mt-5">Your Path to Academic Excellence!</h1>
                <h1 className="mt-20"><h1 className="mt-5">“Education is the passport to the future, </h1>
                <h1 className="mt-5">for tomorrow belongs to those who prepare for </h1>
                <h1 className="mt-5">it today.” – Malcolm X</h1></h1>
                <h1 className="mt-5">{color}</h1>
                </div>
                <div className="mt-20">
                <button onClick={hello} class=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-black dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
<span class={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-${gradientColor}  rounded-md group-hover:bg-opacity-0`}>
Get started
</span>
</button>
                </div>
            </div>
            <div className="w-1/2 h-auto bg-orange-400 rounded-bl-full">
                <div className="h-full">
          </div>
            </div>
        </div>
        </>
    );
}

export default Home2;
