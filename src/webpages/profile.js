import React from 'react'
import { useSession } from '../frb/userprovider'

const Profile = () => {
    const { user } = useSession();

    if(!user)
        return null
    return (
        <div>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
        </div>
    )
}
export default Profile;