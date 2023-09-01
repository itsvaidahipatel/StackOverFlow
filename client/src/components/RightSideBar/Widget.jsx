import React from 'react'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/logo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18' />
            <p>observability is the key to the future of software</p>
        </div>

        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18' />
            <p>Podcast 374: How valuabble is your school</p>
        </div>
        </div>
        
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18' />
            <p>Review queue workflows- Final release</p>
        </div>

        <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18' />
            <p>please wecome Valued Associates- SpencerG</p>
        </div>

        <div className='right-sidebar-div-2'>
            <img src={blacklogo} alt="pen" width='18' />
            <p>Outdated answers-accepted answer is now unpinned on stack overflow</p>
        </div>
        </div>
        
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18' />
            <p>Why was this spam flag declined, yet this question is marked as spam</p>
        </div>

        <div className='right-sidebar-div-2'>
            <img src={comment} alt="pen" width='18' />
            <p>What is the best cours eof action  when a user has high enough  rep to...</p>
        </div>

        <div className='right-sidebar-div-2'>
            <img src={blacklogo} alt="pen" width='18' />
            <p>Is a link to 'How to ask' page a useful comment</p>
        </div>
        </div>

        
    </div>
  )
}

export default Widget