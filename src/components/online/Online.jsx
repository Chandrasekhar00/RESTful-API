import "./online.css"

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarprofileImgContainer">
        <img src={user.profilePicture} alt="" className="rightProfile" />
        <span className="personOnline"></span>
      </div>
      <span className="personName">{user.username}</span>
    </li>
  )
}
