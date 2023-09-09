import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import TagsList from './TagsList'
import './Tags.css'


function Tags() {
    const tagsList = [
        {
            "id": 1,
            "tagName": "python",
            "tagDesc": "For questions related to the Python programming language, its libraries, and frameworks. Please include all relevant tags on your question."
        },
        {
            "id": 2,
            "tagName": "java",
            "tagDesc": "For questions about the Java programming language, its APIs, and related technologies. Please include all relevant tags on your question."
        },
        {
            "id": 3,
            "tagName": "reactjs",
            "tagDesc": "For questions regarding React.js, a JavaScript library for building user interfaces. Please include all relevant tags on your question."
        },
        {
            "id": 4,
            "tagName": "android",
            "tagDesc": "For questions related to Android app development, including Java/Kotlin programming, app design, and APIs. Please include all relevant tags on your question."
        },
        {
            "id": 5,
            "tagName": "sql",
            "tagDesc": "For questions about Structured Query Language (SQL), its usage, and database management. Please include all relevant tags on your question."
        },
        {
            "id": 6,
            "tagName": "csharp",
            "tagDesc": "For questions related to C# programming language, .NET framework, and Windows application development. Please include all relevant tags on your question."
        },
        {
            "id": 7,
            "tagName": "html-css",
            "tagDesc": "For questions about HTML and CSS, including web design, layout, and front-end development. Please include all relevant tags on your question."
        },
        {
            "id": 8,
            "tagName": "machine-learning",
            "tagDesc": "For questions related to machine learning, data analysis, and artificial intelligence. Please include all relevant tags on your question."
        },
        {
            "id": 9,
            "tagName": "docker",
            "tagDesc": "For questions about Docker, containerization, and deploying applications in containers. Please include all relevant tags on your question."
        },
        {
            "id": 10,
            "tagName": "typescript",
            "tagDesc": "For questions regarding TypeScript, a statically typed superset of JavaScript. Please include all relevant tags on your question."
        },
        {
            id: 11,
            tagName: "javascript",
            tagDesc: "For questions regarding ECMAScript (Javascript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question"
        }
    ]

  return (
    <div className='home-container-1'>
        <LeftSideBar/>
        <div className="home-container-3">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is  a keyword or a label that categorizes yoour question with other, similar question </p>
            <p className='tags-p'>Using the right tags makes it easier for others to find ans answer your question</p>
        
            
            <div className="tags-list-container">
                {
                    tagsList.map((tag)=>(
                        <TagsList tag={tag} key={tagsList.id}/>
                    ))
                }
            </div>
        </div>
    </div>
    
  )
}

export default Tags