import Sidebar from "./sidebar";
import { useState ,useEffect} from "react";
import { student } from "../constants/sideConstants";
import axios from "axios";
function AddEnquiry() {
  const [inputarr, setInputarr] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: "",
    course: "",
    message: ""
  });
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [description,setDescription]=useState('');
  const [coursed,setCoursed]=useState({})
  const email=localStorage.getItem("email");
  const [user,setUser]=useState([]);
  const hello=()=>{
    alert("Enquiry added successfully")
  }
  useEffect(() => {
    axios.get('http://localhost:8081/getcourse').then((response) => {
      setAllCourses(response.data);
    console.log(response.data);
    });
  }, []);


  // const handleSubmit = async (e) => {
   
  // };
  useEffect(() => {
    axios.get(`http://localhost:8081/user/getSignIn/${email}`).then((response) => {
      setUser(response.data);
    console.log(response.data,email);
    });
  }, []);
  const handleCourseChange = (e) => {
    setSelectedCourseId(e.target.value);
    // Fetch course data based on the selected course ID
    axios.get(`http://localhost:8081/${e.target.value}`).then((response) => {
      setCoursed(response.data);
      console.log(response.data)
    });
  };
  // const { name, course, message } = inputdata;

  const handleChange = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  let {name,course,message}=inputdata;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(description)
    const newEnquiry = {
    enquiry_id :Math.floor(Math.random() * 10000) + 1,
      description: description, // Assuming this is the description from the form
      reply: null, // Assuming this is the reply from the form
      user: user, // Using the user state directly
      courses: coursed // Using the course state directly
    };
    // setEnquiry(newEnquiry); // Set the enquiry state with the updated data
    // setLoading(true);
    console.log(newEnquiry)
    try {
      // Post the enquiry data directly
      const response = await axios.post("http://localhost:8081/postenq", newEnquiry);
      // Handle response if needed
      console.log("Enquiry posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting enquiry data:", error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="fixed z-50">
          <Sidebar links={student} />
        </div>
        <div className="ml-96">
          <section class="bg-white dark:bg-gray-900 fixed">
            <div class="py-8 lg:py-16 px-4 mx-auto">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Enquiry</h2>
              <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
              <form action="#" class="space-y-4" onSubmit={handleSubmit}>
                {/* <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                  <input type="text" name="name" value={name} onChange={handleChange} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your name" required />
                </div> */}
                <div>
                <select
                        id="course"
                        name="course"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        value={selectedCourseId}
                        onChange={handleCourseChange}
                      >
                        {/* You can add the options dynamically if needed */}
                        <option value="" disabled selected>
                          Select a course
                        </option>
                        {allCourses.map((course) => (
                          <option key={course.course_id} value={course.course_id}>
                            {course.course_name}
                          </option>
                        ))}
                      </select>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea id="message" rows="6" name="message" value={description} onChange={(e)=>{setDescription(e.target.value)}} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button onClick={hello} type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"   >Send message</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AddEnquiry;
