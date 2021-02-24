import React from 'react'


const Articles = (props) => {
    const articles = props.articles

    const renderArt = () => {
        return articles.map(article => {
            return(
            <div className='article-container'>
                <h1>{article.title}</h1>
                <p style={{textIndent: 25}}>{article.body.split(".")[0]}.... <a href="https://youtu.be/dQw4w9WgXcQ">read more</a></p>
            </div>
            )
        })

    }
return(
    <div className='articles-container'>
        <center><h1 style={{color:'grey'}}>Chuck News</h1></center>
        {renderArt()}
    </div>
)

}

export default Articles

