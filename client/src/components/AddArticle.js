import React from 'react'

const AddArticle = () => {
  return (
    <div className="form-articulo">
      <div className="container">
        <h1 className="addArticle">Add New Article</h1>
        <form>
          <div class="form-group">
            <label htmFor="authorname">Author Name</label>
            <input type="text" class="form-control" placeholder="Author Name" />

          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" placeholder="Title Article" />
          </div>
          <div class="form-group">
            <label htmlFor="article">Article</label>
            <textarea class="form-control" rows="3" />
          </div>
          <button type="submit" className="btn btn-info">Post Article</button>
        </form>
      </div>
    </div>
  )
}

export default AddArticle


