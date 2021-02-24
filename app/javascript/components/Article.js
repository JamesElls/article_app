import React from 'react'

const Article = (props) =>{
    return(
    <div className='article-show'>
        <h1>{article.title}</h1>
        <p style={{textIndent: 25}}>{article.body}</p>
    </div>
    )
}


export default Article