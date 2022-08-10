import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReorderIcon from '@mui/icons-material/Reorder';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='s-top'>
                <span className='logo'>lamadaim </span>
            </div>
            <hr></hr>
            <div className='s-center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                    <DashboardIcon ClassName='icon'/>
                    <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                    <AccountCircleIcon ClassName='icon'/>
                    <span>Users</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                    <VideoLibraryIcon ClassName='icon'/>
                    <span>TripVideo</span>
                    </li>
                    <li>
                    <FavoriteIcon ClassName='icon'/>
                    <span>Favorite</span>
                    </li>
                    <li>
                    <ReorderIcon ClassName='icon'/>
                    <span>Orders</span>
                    </li>
                    <li>
                    <NotificationImportantIcon ClassName='icon'/>
                    <span>Notification</span>
                    </li>
                    <li>
                    <LogoutIcon ClassName='icon'/>
                    <span>Logout</span>
                    </li>
                    
                </ul>
            </div>
            <div className='bottom'>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
        
        
    )
}


export default Sidebar;