import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userslice'

function Users() {
    const dispatch = useDispatch();

    const { users, loading, error } = useSelector(
        (state) => state.users
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-blue-200'>
            {users.map((user) => (
                <div key={user.id} className='bg-white border rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300'>
                    <ul className='space-y-2'>
                        <li><span className='font-bold'>Name:</span> {user.name}</li>
                        <li><span className='font-bold'>Email:</span> {user.email}</li>
                        <li><span className='font-bold'>City:</span> {user.address.city}</li>
                        <li><span className='font-bold'>Zipcode:</span> {user.address.zipcode}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
}
export default Users;
