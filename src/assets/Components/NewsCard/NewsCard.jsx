import React from 'react'
import './NewsCard.css'
const NewsCard = ({newsItem}) => {

    const fulldate = new Date(newsItem.publishedAt);

    const time = fulldate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // 



    
const date = fulldate.toLocaleDateString(); // Outputs date in the default locale format
console.log(date); // Example output: "8/31/2024" (MM/DD/YYYY format)

  return (
    <div className='newsCard'>
        <div className="newstext">
            <div>
                <span className='title'>{newsItem.title}</span>
            <hr />
                <span className='author'><a href={newsItem.url} target='__blank' style={{textDecoration: "none",color:'blue'}}><b>short </b></a>
                <span className='muted'>by {newsItem.author? newsItem.author:"unknown"} / {time} {""}on {""}
                 {date}
                        
                         
                  
                </span></span>
            </div>
            <div className="readmore">
                
                    <span className='redmore' >Read more at <a style={{textDecoration: "none",color:'red'}} href={newsItem.url} target='__blank'><b>{newsItem.source.name}</b></a> </span>
                
            </div>
        </div>


    </div>
  )
}

export default NewsCard
