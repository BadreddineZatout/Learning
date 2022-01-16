import React, {useEffect} from 'react';
import { fetchUsers } from '../redux';
import { useDispatch, useSelector } from 'react-redux';

function UserContainer() {
    const { loading, users, error} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    return loading ? (
        <h2>Loading ...</h2>
    ) : error ? (
        <h2>{error}</h2>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
                {users && users.map(user => <p>{ user.name }</p>)}
            </div>
        </div>
    )
}

export default UserContainer
