import {Outlet} from 'react-router-dom'
import MyNavbar from './MyNavbar';
function RootLayout(){
   return <>
   <MyNavbar />
   <div className="outlet">
    <Outlet />
   </div>
   </>
}
export default RootLayout;