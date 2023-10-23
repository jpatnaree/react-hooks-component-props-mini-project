// import blogData from "../data/blog";
import Timer from "./Timer"

function ArticleList({props}) {

    const {posts} = props
    return posts.map(post => {

        const {title, date, preview, id, minutes} = post

        return <article key={id}>
            <h3>{title}</h3>
            <small>{date} <span><Timer minutes={minutes} /> minutes</span></small>
            <p>{preview}</p>
        </article>
    })
}

export default ArticleList