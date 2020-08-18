import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

const PostForm = ({ createPost }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onSubmit = async e => {
        e.preventDefault();    
        const post = {
            title,
            body
        }
        createPost(post)
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label> Title:</label> <br/>
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Body:</label> <br/>
                    <textarea name="body" cols="30" rows="4" value={body} onChange={e => setBody(e.target.value) } ></textarea>
                </div>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm)
