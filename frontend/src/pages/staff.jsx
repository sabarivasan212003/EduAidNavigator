import Sidebar from "./sidebar";
import { staffLinks } from "../constants/sideConstants";
function Staff() {
    return ( 
        <>
        <Sidebar links={staffLinks} />
        </>
     );
}

export default Staff;