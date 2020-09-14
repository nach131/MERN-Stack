import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Article = (props) => {
  const [title, setTitle] = useState('')
  const [article, setArticle] = useState('')
  const [authorname, setAuthorname] = useState('')

useEffect(() => {
axios.get(`/articles/${props.match.params.id}`)
.then(res=>[
  setTitle(res.data.title),
  setArticle(res.data.article),
  setAuthorname(res.data.authorname)
])
.catch(error=>console.log(error))
}, [props]) 

  return (
    <div>
      <h2>{title}</h2>
      <p>{article}</p>
      <p>{authorname}</p>
    </div>
  )
}

export default Article
