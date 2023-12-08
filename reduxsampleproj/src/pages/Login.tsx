import {useState} from 'react'
import {login,logout} from '../store';
import {useDispatch, useSelector} from 'react-redux';




function Login() {
    const [newUsername, setNewUsername] = useState<string>("");

    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);
    return(
        <div>
            <label htmlFor="login">Login: </label>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setNewUsername(e.target.value)}}
            id="login" 
            type="text" 
            placeholder="username..."></input>
            <button onClick={() => dispatch(login({username: newUsername}))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
            <h1>Username: {username}</h1>
        </div>
    );
}

export default Login;