import {Outlet} from 'react-router-dom'
import MyNavbar from './Navbar';
function RootLayout(){
   return <>
   <MyNavbar />
   <div className="outlet">
    <Outlet />
   </div>
   </>
}
export default RootLayout;