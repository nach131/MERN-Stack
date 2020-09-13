// import { PromiseProvider } from 'mongoose'
import React from 'react'

const Articles = ({ posts }) => {
  // console.log(posts)
  return (
    <div className="articulos">

      {posts.map((article, key) => (
        <div className="container">
          <h2>{article.title}</h2>
          <p>{article.article}</p>
          <span className="badge badge-secondary p-2">{article.authorname}</span>
          <div className="row my-5">
            <div className="col-sm-2">
              <a href="" className="btn btn-outline-success">Editar articulo</a>
            </div>
            <div className="col-sm-2">
              <a href="" className="btn btn-outline-danger">Borrar articulo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
