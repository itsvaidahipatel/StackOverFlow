import React from 'react'
import './Users.css'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import { useLocation } from 'react-router-dom'
import UsersList from './UsersList'

const Users = ()=> {
    const location = useLocation()

    
    return (
        <div className='home-container-1'>
            
            <LeftSideBar/>
            <div className="home-container-3">
                {
                    location.pathname === '/Users' ?
                    <UsersList/> : <></>
                }
            </div>
        </div>
    )
}

export default Users