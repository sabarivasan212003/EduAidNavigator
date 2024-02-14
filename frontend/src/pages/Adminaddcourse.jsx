import { AdminLinks, student } from "../constants/sideConstants";
import { useState } from "react";
import Sidebar from './sidebar';
import axios from "axios";

function Adminadd() {
    const [formData, setFormData] = useState({
        course_name: '',
        description: '',
        duration: '',
        imageUrl: '',
        level: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8081/admin/postcourse", formData);
            console.log(response);
            alert("Courses added successfu7lly");
        } catch (error) {
            console.error(error);
            alert("An error occurred while adding courses");
        }
    };

    return (
        <>
            <Sidebar links={AdminLinks} />
            <section className="bg-gray-50 dark:bg-gray-900 h-screen">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:w-1/2 lg:py-0">
                    <div className="flex fixed top-5 left-10">
                        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="h-8 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAACUCAMAAABiDq8bAAAAYFBMVEUAs+b///8AsOUArOT6/f7w+f2x3/RlxutMwOkAruTb8PkAqeQbsOah1/L2/P7f8/tUv+rG6feBz++Y1vHT7vnp9/xBvekst+dxyu295veP0/Cm3PNAueiz4/VbwuqJz+9PoyjFAAAFG0lEQVR4nO2c2YKjKhBAsVwIZuLCqqLm///yglFb093pmTsrWuepo2h7AhSgVghBEARBEARBEARBEARBEARBEARBEARBEARBkH8e+IGt4QOwNev7D4qYan/A772gP8g49mu9gpY1fS4AeigbtnwAU1Hz567ut9Inacsr87AHrqKy2ReAqo6i7OEOpGqsivifvsjfhI4cpR0ne2hUFKmdPFQyipLJHcjYSV/c/p1L/eVM7k7YUuc2uUeKbnq0drU+ubs6F+WjsPh7l/sLAFhC3Ozu7Stgk3sk19gGpvUbkhuD/i6XomI5Bwsw7LGxGS/aAGPMZK1UDyXJjbGp/6teoh8I/7FoK0bbYiqU5m1G/YFEX0ZKTWj2rJNlXreZEJxqxip+a3Nvlmaa8Kldizmu08RvFoZ00+ayzu4Vic3Iu5tta1mWoXV9MOnSelNnc+OauSiW5c5TUkZ90y6qKfSR3HcGzvrMHaFaQQ0ztLOupSTzCQrOvvx//xJAV/dHT5eZcM147No0KjnzY1okvTvjvq4bdqmjRN4awqrO1mWxPTbJ4r+t80M8u3uFsr6NYNzgnQrovXzjI7srV9KYlkl771nfDbJ4d2CQ7kqWyV6/vRsYbZkRL68YYS7QqZE1ed0YoJl8bi0yWPe2og0Xu6pMpXCS1k7ylLEiSilrBm4Ir8t9fd85rZpg3bPYD89uds5tvioVuSDfKIVeRvm18V+AbirG63edhLnB/RKu+zyFn1YnnVwDd34HQ5hWkQvy3JWBsVZrv1jdv7kdwbtPG4BoahfDVF5i4iq1jayPd+v2Ymiy4nDuZFqbar70aSWYm966cc4NfEtATMVo2O2Q7n4z6Zu55xeSABOGxSJdzLXbf1x3b2/4Iqtdu2f1o9ITa6aVz5Hd/T4zzGFtvLJljXOZ13wHd3dtfZn1PdazUSLWG3RHd/ctf12o+65/eZM7vjuB67Cqq+396RO4E3IVs2Ieb0udwp1cu0eUu+4KncOdXP1In8T7MpN7Mt23OLx7xD5w53GjkuJ87qJI3PKGxd0FzuYO2k7PLR73t8/lTiDe3Jk8mfv+NOiO7qGA7uj+Geh+TvfYP3dXL58zHtYd6O1246+LHNWdAIvj14+Xj+v+HadBd3QPBXRH9585DbqjeyigO7r/zGnQHd1D4fvc4aucoOO6A/kqNeyw7sy/flC+9ArZ/eWdiWPfrxu+verTL92nw4yhwbqrQfCx7435MNHxU3dX2PT9hXfZ9Gp1mO4PVG2bqn/v//EzaP/e9ciHzYv3wblfnl4Jzwc+6r3+e3e3u3fean9oYsPKlyGkjp4p6o7qzaD27A5gxq59lzISlWNgSWKgBynzUqXP+qNZKn/vDkTzYVe6UGUupawDS5Mi/uY7MZr6eCVztcmaUbbpH/Zbd58Hu2kpRSnrzGfWuTDJglP3+KRQxsBcuF0TI71Yy7W3f3N35uItqUTJVjQaYnfol5Pef53pC9Dc1mvsdvYGVneAy5u5GxTcN8NCzIL9FKdjmtuaEFS0DczuzHTLi8WJzLg5lveM09c8W2pY2eld6iSmQ7EEQlGRI4o/cAGQru27nRrBkvBetHcdeu/+Cubi2jYJcE4ZqXl/3Cp/w9nb51kf12cw97iwt532JbY6emvfwnqxTl4lNUFOX/43YOjc660+UZ3PwPTzJlET3M9Z/ArADMmaF3c2wFT9Oc095zVHEARBEARBEARBEARBEARBEARBEARBEAQJmf8AoMJJ7/ZTFfsAAAAASUVORK5CYII=" alt="logo" />
                            EduAid
                        </a>
                    </div>
                    <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-10">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-6 ">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Add <span>course</span>
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Name</label>
                                    <input type="text" name="course_name" id="course" value={formData.course_name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Course Name" required />
                                </div>
                                <div>
                                    <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <input type="text" name="description" id="desc" value={formData.description} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required />
                                </div>
                                <div>
                                    <label htmlFor="level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
                                    <input type="text" name="level" id="level" value={formData.level} onChange={handleChange} placeholder="Level" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Image</label>
                                    <input type="text" name="imageUrl" id="image" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time duration</label>
                                    <input type="text" name="duration" id="time" value={formData.duration} onChange={handleChange} placeholder="Time Duration" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add course</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Adminadd;
