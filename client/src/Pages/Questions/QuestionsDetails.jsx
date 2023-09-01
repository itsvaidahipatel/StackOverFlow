import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate, useParams, useLocation} from 'react-router-dom'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import { postAnswer } from '../../actions/question'

import './Questions.css'
import upvote from '../../assets/Sort_up.png'
import downvote from '../../assets/sort_down.png'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'


const QuestionsDetails = () => {
    const {id} =useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const questionsList= useSelector(state=>state.questionsReducer)
    const User = useSelector((state)=>(state.currentUserReducer))
    const [answer , setAnswer] = useState('')
    const handlePostAnswer = (e, answerLength)=>{
        e.preventDefault()
        if(User ==  null){
            alert('Login or Signup to answer a question')
            navigate('/auth')
        }else{
            if(answer === ''){
                alert("Enter an Answer before Submitting")
            }
            else{
                dispatch(postAnswer({id, noOfAnswers:answerLength+1, answerBody: answer, userAnswered: User.result.name}))
            }
        }
    }
    const handleShare = ()=>{
        copy("http://localhost:3000"+location.pathname)
        alert("Copied URL: http://localhost:3000"+location.pathname)
    }
    // var questionsList=[
    //     {
    //       _id:'1',
    //       upvotes:3,
    //       downvotes:2,
    //       noOfAnswers:2,
    //       questionTitle:"what is a funciton",
    //       questionBody:"It meant to be",
    //       questionTags:["jaavscript","R","python"],
    //       userPosted:"mano",
    //       askedOn:"jan 1",
    //       userId:1,
    //       answer:[{
    //         answerBody: "Answer",
    //         userAnswered:'kumar',
    //         answeredOn:"jan 2",
    //         userId:2,
    //       }]
    //   },
    //   {
    //     _id:'2',
    //     upvotes:4,
    //     downvotes:5,
    //     noOfAnswers:1,
    //     questionTitle:"what is a funciton",
    //     questionBody:"It meant to be",
    //     questionTags:["C","jaavscript","R","python"],
    //     userPosted:"mano",
    //     askedOn:"jan 1",
    //     userId:1,
    //     answer:[{
    //       answerBody: "Answer",
    //       userAnswered:'kumar',
    //       answeredOn:"jan 2",
    //       userId:2,
    //     }]
    // },
    // {
    //   _id:'3',
    //   upvotes:2,
    //   downvotes:0,
    //   noOfAnswers:3,
    //   questionTitle:"what is a funciton",
    //   questionBody:"It meant to be",
    //   questionTags:["R","python"],
    //   userPosted:"dev",
    //   askedOn:"feb 2",
    //   userId:1,
    //   answer:[{
    //     answerBody: "Answer",
    //     userAnswered:'kumar',
    //     answeredOn:"jan 2",
    //     userId:2,
    //   }]
    // }
    // ]
  return (
    <div className='question-details-page'>
     {
        questionsList.data===null?
        <h1>Loading...</h1>:
        <>
            {
                questionsList.data.filter(question=>question._id===id).map(question=>(
                    <div key={question._id}>
                        {console.log(question)}
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className="question-votes">
                                    <img src={upvote} alt='' width='18'/>
                                    <p>{question.upVote-question.downVote}</p>
                                    <img src={downvote} alt="" width='36' />
                                </div>
                            <div style={{width:"100%"}}>
                                <p className='questions-body'>{question.questionBody}</p>
                                <div className="question-details-tags">
                                    {
                                        question.questionTags.map((tag)=>(
                                            <p key={tag}>{tag}</p>
                                            ))
                                        }
                                </div>
                                <div className="question-actions-user">
                                        <button type='button' onClick={handleShare}>Share</button>
                                        <button type='button'>Delete</button>
                                    <div>
                                        <p>asked {moment(question.postedOn).fromNow()}</p>
                                        <Link to={`/User/${question.userId}`} className='user-link'style={{color:'#0086d8'}}>
                                            <Avatar backgroundColor="orange" px='8px' py='5px' >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                            <div>
                                                {question.userPosted}
                                            </div>
                                        </Link>
                                    </div>
                                        </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAnswers !== 0 && (
                                <section>
                                    <h3>
                                        {question.noOfAnswers} Answers
                                    </h3>
                                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                                </section>
                            )
                        }
                        <section className='post-ans-container'>
                            <h3 >Your Answer</h3>
                            <form onSubmit={(e)=>{handlePostAnswer(e , question.answer.length)}}>
                                <textarea name="" id="" cols="30" rows="10" onChange={e=>setAnswer(e.target.value)}></textarea>
                                <input type="submit" className='post-ans-btn' value="post your answer" />
                            </form>
                            <p>
                                Browse other questions tagged
                                {
                                    question.questionTags.map((tag)=>(
                                        <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                    ))
                                } or
                                <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}>ask your own question</Link>
                            </p>
                        </section>
                    </div>
                ))
            }
        </>
     }   
    </div>
  )
}

export default QuestionsDetails