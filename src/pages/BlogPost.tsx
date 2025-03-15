import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import '../styles/BlogPost.css';
import postsData from '../data/posts.json';

interface Post {
    id: string;
    title: string;
    date: string;
    slug: string;
    content?: string;
    tags: string[];
}

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<Post | null>(null);
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                // Find post metadata by slug
                const postData = postsData.find(p => p.slug === slug);

                if (!postData) {
                    navigate('/');
                    return;
                }

                setPost(postData);

                // Fetch post content
                try {
                    const response = await fetch(`${process.env.PUBLIC_URL}/content/${slug}.md`);
                    const text = await response.text();
                    setContent(text);
                } catch (error) {
                    console.error('Error fetching post content:', error);
                    setContent('# Error\nUnable to load post content.');
                }
            } catch (error) {
                console.error('Error fetching post data:', error);
                navigate('/');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug, navigate]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!post) {
        return <div className="not-found">Post not found</div>;
    }

    return (
        <article className="blog-post">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-date">{post.date}</div>
            <div className="post-tags">
                {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="markdown-body">
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </article>
    );
};

export default BlogPost;
