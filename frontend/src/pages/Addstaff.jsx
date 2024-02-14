import Sidebar from "./sidebar";
import { useState } from "react";
import { AdminLinks } from "../constants/sideConstants";

function AddStaff() {
  const [inputarr, setInputarr] = useState([]);
  const [inputdata, setInputdata] = useState({
    name: "",
    course: "",
    message: ""
  });

  // const { name, course, message } = inputdata;

  const handleChange = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  let {name,course,message}=inputdata;
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputarr([...inputarr, { name, course, message }]);
    console.log(inputarr);
    console.log(inputdata);
    // Reset form fields if needed
    setInputdata({ name: "", course: "", message: "" });
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="fixed z-50">
        <Sidebar links={AdminLinks} />
        </div>
        <div className="ml-96">
          <section class="bg-white dark:bg-gray-900 fixed">
            <div class="py-8 lg:py-16 px-4 mx-auto">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Staff Details</h2>
              <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
              <form action="#" class="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Staff email</label>
                  <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="staff email" required />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Staff Name </label>
                  <input type="text" name="name" value={name} onChange={handleChange} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="staff name" required />
                </div>
                <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course undertaken</label>
                  <input type="text" id="subject" name="course" value={course} onChange={handleChange} class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                </div>
                <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                  <input type="text" id="subject" name="course" value={course} onChange={handleChange} class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Address" required />
                </div>
                {/* <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea id="message" rows="6" name="message" value={message} onChange={handleChange} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div> */}
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AddStaff;
