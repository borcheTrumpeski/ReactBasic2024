import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';
import magic from '../images/magic.PNG'

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/posts');
            setPosts(response.data.posts);
        } catch (error) {

        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <div className="image-container">
                        <img src={magic} alt="Common" className="post-image" />
                        <div className="tags-overlay">
                            {post.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <p>{post.body}</p>
                    <p><b>Likes:</b> {post.reactions.likes}</p>
                    <p><b>Dislikes:</b> {post.reactions.dislikes}</p>
                </div>
            ))}
        </div>
    );
};

export default Posts;
