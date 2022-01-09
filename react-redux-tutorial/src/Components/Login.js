import { useDispatch, useStore } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
    const store = useStore();
    console.log(store.getState());

    const dispatch = useDispatch();
    console.log(login, logout);
    return ( 
        <div>
            <button onClick={() => {
                dispatch(login({name: 'badi', age: 22, email: 'badi@esi.dz'}))
                console.log(store.getState());
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