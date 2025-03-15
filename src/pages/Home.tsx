import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../data/posts.json';

interface Post {
    id: string;
    title: string;
    date: string;
    slug: string;
    summary: string;
    tags: string[];
}

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        // 実際のデプロイでは静的ファイルになるため、非同期処理を使う必要はありませんが、
        // 開発環境用にAPIリクエストを模倣
        setPosts(postsData);
    }, []);

    return (
        <div className="home">
            <h1>Latest Articles</h1>
            {posts.map((post) => (
                <article key={post.id} className="post">
                    <h2 className="post-title">
                        <Link to={`/post/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className="post-date">{post.date}</div>
                    <p className="post-summary">{post.summary}</p>
                    <div className="post-tags">
                        {post.tags.map((tag) => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <Link to={`/post/${post.slug}`} className="read-more">
                        Read more →
                    </Link>
                </article>
            ))}
        </div>
    );
};

export default Home;
