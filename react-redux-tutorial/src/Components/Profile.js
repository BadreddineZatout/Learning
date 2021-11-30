import { useSelector } from "react-redux";
import ChangeColor from "./ChangeColor";
import Login from "./Login";


const Profile = () => {
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);

    return ( 
        <div style={{backgroundColor: themeColor}}>
            <h1>Profile Page</h1>
            <p>Name: { user.name }</p>
            <p>Age: { user.age }</p>
            <p>Email: { user.email }</p>
        <Login />
        <ChangeColor />
        </div>
     );
}
 
export default Profile;