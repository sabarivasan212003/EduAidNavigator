import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar2 from "./components/Navbar2";
import Home2 from "./pages/Home2";
// import User from "./pages/user";
import Register from "./pages/Register";
// import Sidebar from "./pages/sidebar";
import Student from "./pages/student";
import  Admin  from "./pages/Admin";
import Staff from "./pages/staff";
import StudentProfile from "./pages/stdentprofile";
// import ViewCourses from "./pages/view_courses";
// import Dashboard from "./pages/Dashboard";
// import Viewcourses from "./pages/viewcourses";
import Viewcourses from "./pages/viewcourses";
import { AdminviewId, coursesId, viewId } from "./constants/courses1"; 
// import {inputarr} from "./pages/Addenquiry"
import Profile from "./pages/profile";
import Sidebar from "./pages/sidebar";
import AddEnquiry from "./pages/Addenquiry";
import ViewEnquiry from "./pages/viewenquiry";
import AdminViewEnquiry from "./pages/Adminviewenquiry";
import AdminViewcourses from "./pages/Adminviewcourses";
import Chart from "./pages/chart";
import AddStaff from "./pages/Addstaff";
import AdminDashboard from "./pages/Admindashboard";
import Adminadd from "./pages/Adminaddcourse";
import Settings from "./pages/settings";
import Error from "./pages/Error";
function App() {
  const rent=localStorage.getItem('email1');

  return ( 
    <Router>
         {/* <Navbar /> */}

          <Routes>
            {/* <Route path="/" element={<Home />}/> */}
            <Route path="/ad" element={<AdminDashboard link={AdminviewId}/>}/>
            <Route path="/" element={<Home2 />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/navbar" element={<Navbar />}/>
            <Route path="/navbar2" element={<Navbar2 />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/staff" element={<Staff />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/student" element={<Student />}/>
            <Route path="*" element={<Error />}/>
            
            {rent==="admin@gmail.com"?(
              <>
            <Route path="/ave" element={<AdminViewEnquiry link={AdminviewId}/>}/>
            <Route path="/avc" element={<AdminViewcourses/>}/>
            <Route path="/as" element={<AddStaff/>}/>
            <Route path="/add" element={<Adminadd/>}/>
            <Route path="/set" element={<Settings/>}/>
            </>
            ):(
              <>
            <Route path="/sp" element={<StudentProfile />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/sidebar" element={<Sidebar />}/>
            <Route path="/vc" element={<Viewcourses link={coursesId} />}/>
            <Route path="/ac" element={<AddEnquiry />}/>
            <Route path="/ve" element={<ViewEnquiry link={viewId}/>}/>
            <Route path="/chart" element={<Chart/>}/>
            </>
            )}
            {/* <Route path="/dash" element={<Dashboard />}/> */}
            {/* <Route path="/view" element={<Viewcourses />}/> */}

          </Routes>
        </Router>

   );
}

export default App;