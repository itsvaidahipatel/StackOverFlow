import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate} from 'react-router-dom'
import './HomeMainBar.css'
import QuestionList from './QuestionList'

const HomeMainBar = () => {
  const user=1;
    const navigate=useNavigate()
    const questionsList= useSelector(state=>state.questionsReducer)

//   var questionsList=[
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
const location=useLocation()
const checkAuth=()=>{
  if(user===null ){
    alert("login or sign up to ask a question")
    navigate('/Auth')
  }
  else{
    navigate('/AskQuestion')
  }
}
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1>: <h1>All Questions</h1>
        }
        <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
              
              <div>
                {
                  questionsList.data===null?
                  <h1>Loading...</h1>:
                  <>
                  <p>{questionsList.data.length} questions</p>
                  <QuestionList questionsList={questionsList.data}/>
                  
                  </>
                }
              </div>
    </div>
  )
}

export default HomeMainBar