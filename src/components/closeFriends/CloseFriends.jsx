import "./closeFriends.css"
export default function CloseFriends({ user }) {
    return (
      <li className="sidebarListItem">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    );
  }
  