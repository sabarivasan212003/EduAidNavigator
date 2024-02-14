// import React from 'react'
import { useState,useEffect } from 'react';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import '../App.css'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import Sidebar from './sidebar';
import { student } from '../constants/sideConstants';
import axios from 'axios';
function Chart() {
    const [enquiries, setEnquiries] = useState([]);
    const [enquiries2, setEnquiries2] = useState([]);
  const r=localStorage.getItem('name');
  const check=localStorage.getItem('id')
//   const token=localStorage.getItem('token');
//   console.log(token)
  useEffect(() => {
      const fetchData = async () => {
          try {
        //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log(check);
        const response = await fetch(`http://localhost:8081/getenroll/`+check);
        const data = await response.json();
        // const color = localStorage.getItem('email');
        // console.log(color);
        console.log(data);
        setEnquiries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await fetch("http://localhost:8081/getcourse");
        const data = await response.json();
        // const color = localStorage.getItem("email");
        console.log(data);
        setEnquiries2(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
    const data = [
        {
        //   name: 'Monday',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
        //   name: 'Tuesday',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
        //   name: 'Wednesday',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
        //   name: 'Thursday',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
        //   name: 'Friday',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
        //   name: 'Saturday',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        // {
        //   name: 'Page G',
        //   uv: 3490,
        //   pv: 4300,
        //   amt: 2100,
        // },
      ];
     

  return (
    <>
    <Sidebar links={student}/>
    <main className='main-container ml-64  bg-gray-900 h-screen'>
        <div className='main-title'>
            <h3><span className='text-orange-600'>WELCOME </span>SABARI VASAN</h3>
        </div>

        <div className='main-cards '>
            <div className='card ml-20 w-38'>
                <div className='card-inner'>
                    <h3>Totalcourse</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{enquiries2.length}</h1>
            </div>
            <div className='card  ml-20 w-38'>
                <div className='card-inner '>
                    <h3>Enrolled courses</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{enquiries.length}</h1>
            </div>
            {/* <div className='card ml-20 w-38'>
                {/* <div className='card-inner'>
                    <h3>Course completed</h3>
                    <BsPeopleFill className='card_icon'/>
                </div> */}
                {/* <h1>33</h1> */}
            {/* </div> */} 
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div> */}
        </div>

        <div className='charts'>
            {/* <ResponsiveContainer width={500} height={500}> */}
            {/* <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            > */}
                {/* <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer> */}
 
            <ResponsiveContainer width={500} height={500}>
                <h1 className='ml-30'><span className="text-orange-600">Points</span> earned</h1>
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer> 

            <div>
                

<div class="relative overflow-x-auto">
    <table class="w-full ml-30 mt-20 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            
            <tr>
                <th scope="col" class="px-6 py-3 rounded-s-lg">
                    courses
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3 rounded-e-lg">
                    status
                </th>
            </tr>
        </thead>
        {enquiries.map((enq) => (
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {enq.courses.course_name}
                </th>
                <td class="px-6 py-4">
                   29/1/2022
                </td>
                <td class="px-6 py-4">
                   yet to complete
                </td>
            </tr>
            {/* <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    javascript
                </th>
                <td class="px-6 py-4">
                    22/3/2023
                </td>
                <td class="px-6 py-4">
                   Not yet started
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    springboot
                </th>
                <td class="px-6 py-4">
                   19/2/2022
                </td>
                <td class="px-6 py-4">
                    completed
                </td>
            </tr> */}
        </tbody>
        ))}
        <tfoot>
            {/* <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">3</td>
                <td class="px-6 py-3">21,000</td>
            </tr> */}
            <h1>certficates can be downloaded by clicking completed</h1>
        </tfoot>
    </table>
</div>

            </div>

        </div>
    </main>
    </>
  )
}

export default Chart;