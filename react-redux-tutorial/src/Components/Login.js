import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
    const dispatch = useDispatch();

    return ( 
        <div>
            <button onClick={() => {
                dispatch(login({name: 'badi', age: 22, email: 'badi@esi.dz'}))
            }}>Log In</button>

            <button onClick={() => {
                dispatch(logout())
            }}>
                Log Out
            </button>
        </div>
     );
}
 
export default Login;