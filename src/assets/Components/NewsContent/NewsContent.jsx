import { Container } from '@mui/material'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContent.css'
 
const NewsContent = ({newsArray,newsResult}) => {
  return (
    <Container maxWidth='md'>
      <div className='content'>
<div className='downloadMessage'>
    <span className='downloadText'>For the best experience use <a href="" style={{color: "white",textDecorationLine:'none' , appearance: "none", fontWeight: 500}}>Headlines Today</a> app on your smartphone</span>
   <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="" height='80%'/>
    <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="" height='80%'/>

</div>
        {
            newsArray.map((newsItem)=>(
                <NewsCard newsItem={newsItem} key={newsItem.title}/>
            ))
        }
       
      </div>
    </Container>
  )
}

export default NewsContent
