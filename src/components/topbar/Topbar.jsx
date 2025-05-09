import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
 
      <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">ParaDice</span>
      </div>
        <div className="topbarCenter">
            <div className="searchBar">
            <SearchIcon className="searchIcon"/>
                <input placeholder="Search For Friend or Post or Videos" type="text" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">TimeLine</span>
            <div className="topbarIcons">
            <div className="topbarIconItems"><PersonIcon/>
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItems"><ChatIcon/>
            <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItems"><NotificationsIcon/>
            <span className="topbarIconBadge">3</span>
            </div>
        </div>
        </div>
        
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
 
  )
}
