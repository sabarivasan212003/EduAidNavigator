import Sidebar from "./sidebar";
import { AdminLinks } from "../constants/sideConstants";
function Admin() {
    return ( 
        <>
        <Sidebar links={AdminLinks}/>
        
        
        </>
     );
}

export default Admin;