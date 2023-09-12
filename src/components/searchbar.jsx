import { useState, useEffect } from 'react'
import { fetchAllPosts } from '../API/strangerAPI';
import './searchbar.css'

export default function Searchbar() {
    const [posts, setPosts] = useState([]);
    const [state, setState] = useState({query: '', list: []})

    const handleChange = async (e) => {
        const results = posts.data.posts.filter(post => {
            if (e.target.value === '') return posts
            return post.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setState({
            query: e.target.value,
            list: results
        })
    }

    useEffect(() => {
        async function allPostsHandler() {
            const result = await fetchAllPosts();
            setPosts(result);
        } allPostsHandler();
    }, [])

    return (
        <div className='searchbar'>
            <h1 className='searchbarHeader'>Search for a post!</h1>
            <h3 className='searchbarFooter'>It will find post using letters typed</h3>
            <form className='searchForm'>
                <label className='searchbarText'> Searchbar
                    <input className='searchbarInfo' onChange={handleChange} value={state.query} type='search' placeholder='Search for an item' />
                </label>
            </form>
            <ul>
                {(state.query === '' ? '' : state.list.map(post => {
                    return <li key={post.title}>{post.title}</li>
                }))}
            </ul>
        </div>
    )
}
