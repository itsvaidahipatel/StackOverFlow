import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import UsersList from './UsersList'
import './Users.css'

const Users = ()=> {
    return (
        <div className='home-container-1'>
            
            <LeftSideBar/>
            <div className="home-container-3" style={{marginTop:'30px'}}>
                <h1 style={{fontWeight:"400"}}>Users</h1>
                <UsersList/>
            </div>
        </div>
    )
}

export default Users