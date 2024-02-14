import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { addToken, login } from '../redux/useSlice';
// import { selectUser } from '../redux/useSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function Login() {
    const navigate=useNavigate()
    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
      e.preventDefault();
      if (email === '' || password === '') {
        toast.error('Please fill in all fields');
        return;
      }
    //  if(email==="admin@gmail.com"){
    //   navigate("/ad")
    //  }
    //  else{
      const data = { email, password };
      localStorage.setItem('email1',data.email);
      const kill1=localStorage.getItem('email1');
      axios
        .post('http://localhost:8081/api/v1/auth/authenticate', data)
        .then((res) => {
          console.log(kill1);
          // localStorage.setItem('token',res.data.token)
          if (res.data != null) {
            // toast.success('Successfully logged in');
              console.log(kill1)
            
             if(kill1==="admin@gmail.com"){
              
              navigate('/ad');
             }
             else{
              navigate('/chart');
             }
            
          } else {
            toast.error('Invalid credentials');
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error('An error occurred. Please try again later.');
        });
      // }
    };
    
    return (  
<>
        
<section class="bg--50 dark:bg-gray-900">

  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className= "flex fixed top-5 left-10" >
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class=" h-8 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAACUCAMAAABiDq8bAAAAYFBMVEUAs+b///8AsOUArOT6/f7w+f2x3/RlxutMwOkAruTb8PkAqeQbsOah1/L2/P7f8/tUv+rG6feBz++Y1vHT7vnp9/xBvekst+dxyu295veP0/Cm3PNAueiz4/VbwuqJz+9PoyjFAAAFG0lEQVR4nO2c2YKjKhBAsVwIZuLCqqLm///yglFb093pmTsrWuepo2h7AhSgVghBEARBEARBEARBEARBEARBEARBEARBEARBkH8e+IGt4QOwNev7D4qYan/A772gP8g49mu9gpY1fS4AeigbtnwAU1Hz567ut9Inacsr87AHrqKy2ReAqo6i7OEOpGqsivifvsjfhI4cpR0ne2hUFKmdPFQyipLJHcjYSV/c/p1L/eVM7k7YUuc2uUeKbnq0drU+ubs6F+WjsPh7l/sLAFhC3Ozu7Stgk3sk19gGpvUbkhuD/i6XomI5Bwsw7LGxGS/aAGPMZK1UDyXJjbGp/6teoh8I/7FoK0bbYiqU5m1G/YFEX0ZKTWj2rJNlXreZEJxqxip+a3Nvlmaa8Kldizmu08RvFoZ00+ayzu4Vic3Iu5tta1mWoXV9MOnSelNnc+OauSiW5c5TUkZ90y6qKfSR3HcGzvrMHaFaQQ0ztLOupSTzCQrOvvx//xJAV/dHT5eZcM147No0KjnzY1okvTvjvq4bdqmjRN4awqrO1mWxPTbJ4r+t80M8u3uFsr6NYNzgnQrovXzjI7srV9KYlkl771nfDbJ4d2CQ7kqWyV6/vRsYbZkRL68YYS7QqZE1ed0YoJl8bi0yWPe2og0Xu6pMpXCS1k7ylLEiSilrBm4Ir8t9fd85rZpg3bPYD89uds5tvioVuSDfKIVeRvm18V+AbirG63edhLnB/RKu+zyFn1YnnVwDd34HQ5hWkQvy3JWBsVZrv1jdv7kdwbtPG4BoahfDVF5i4iq1jayPd+v2Ymiy4nDuZFqbar70aSWYm966cc4NfEtATMVo2O2Q7n4z6Zu55xeSABOGxSJdzLXbf1x3b2/4Iqtdu2f1o9ITa6aVz5Hd/T4zzGFtvLJljXOZ13wHd3dtfZn1PdazUSLWG3RHd/ctf12o+65/eZM7vjuB67Cqq+396RO4E3IVs2Ieb0udwp1cu0eUu+4KncOdXP1In8T7MpN7Mt23OLx7xD5w53GjkuJ87qJI3PKGxd0FzuYO2k7PLR73t8/lTiDe3Jk8mfv+NOiO7qGA7uj+Geh+TvfYP3dXL58zHtYd6O1246+LHNWdAIvj14+Xj+v+HadBd3QPBXRH9585DbqjeyigO7r/zGnQHd1D4fvc4aucoOO6A/kqNeyw7sy/flC+9ArZ/eWdiWPfrxu+verTL92nw4yhwbqrQfCx7435MNHxU3dX2PT9hXfZ9Gp1mO4PVG2bqn/v//EzaP/e9ciHzYv3wblfnl4Jzwc+6r3+e3e3u3fean9oYsPKlyGkjp4p6o7qzaD27A5gxq59lzISlWNgSWKgBynzUqXP+qNZKn/vDkTzYVe6UGUupawDS5Mi/uY7MZr6eCVztcmaUbbpH/Zbd58Hu2kpRSnrzGfWuTDJglP3+KRQxsBcuF0TI71Yy7W3f3N35uItqUTJVjQaYnfol5Pef53pC9Dc1mvsdvYGVneAy5u5GxTcN8NCzIL9FKdjmtuaEFS0DczuzHTLi8WJzLg5lveM09c8W2pY2eld6iSmQ7EEQlGRI4o/cAGQru27nRrBkvBetHcdeu/+Cubi2jYJcE4ZqXl/3Cp/w9nb51kf12cw97iwt532JbY6emvfwnqxTl4lNUFOX/43YOjc660+UZ3PwPTzJlET3M9Z/ArADMmaF3c2wFT9Oc095zVHEARBEARBEARBEARBEARBEARBEARBEAQJmf8AoMJJ7/ZTFfsAAAAASUVORK5CYII=" alt="logo" />
          EduAid
      </a>
      </div>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email"  value={email}
                onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  {/* <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div> */}
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        {/*         <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" /> */}
                      </div>
                      <Link to={"/signup"}>
                      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Not have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup here</a>
                  </p>
                  </Link>
                      {/* <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div> */}
                  </div>
                  {/* <Link to={"/signup"} > */}
                  <button type="button" class=" justify-center text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "onClick={submitHandler}>login</button>
                  {/* <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p> */}
              </form>
          </div>
      </div>
  </div>
</section>
</>
    );
}

export default Login;

