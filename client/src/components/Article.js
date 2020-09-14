import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from "react-bootstrap/Spinner";


const Article = (props) => {
  const [title, setTitle] = useState('')
  const [article, setArticle] = useState('')
  const [authorname, setAuthorname] = useState('')

  useEffect(() => {
    axios.get(`/articles/${props.match.params.id}`)
      .then(res => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorname(res.data.authorname)
      ])
      .catch(error => console.log(error))
  }, [props])

  return (
    <div className="row">
      <div id="articulo">
        {!title
          || !article
          || !authorname
          ? <Spinner animation="border" role="status" variant="info mx-auto" >
            <span className="sr-only">Loading...</span>
          </Spinner>
          :
          <>
            <h2>{title}</h2>
            <p>{article}</p>
            <p>{authorname}</p>
          </>
        }
      </div>
    </div>
  )
}

export default Article
