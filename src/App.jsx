import { useState,useEffect } from 'react'
import './App.css'
import Navinshorts from './assets/Components/Navinshorts'
import NewsContent from './assets/Components/NewsContent/NewsContent'
import apiKey from './assets/Data/Config'
import axios from 'axios';


function App() {
  const [category, setcategory] = useState("general")
  const [newsArray, setnewsArray] = useState([])
  const [newsResult, setnewsResult] = useState()

  const newsApi = async () =>{
    try{
const news = await axios.get(` https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`);

setnewsArray(news.data.articles)
setnewsResult(news.data.totalResults)

    }catch (error){
console.log(error)
    }
  }

console.log(newsArray)

  useEffect(() => {
    newsApi()
  }, [newsResult,category])
  
  return (
    <div>
<Navinshorts setcategory={setcategory}/>
<NewsContent newsArray={newsArray} newsResult={newsResult}/>
</div>
  )
}

export default App
