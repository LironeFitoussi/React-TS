import { useState, useEffect, ReactNode } from 'react';

import BlogPosts, { type BlogPost } from './components/BlogPosts.tsx';
import { get } from './util/http';
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from './components/ErrorMessage.tsx';

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      setError(null);
      try {
        const data = (await get(
          'https://jsonplaceholder.typicode.com/posts'
        )) as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map((post) => ({
          id: post.id,
          title: post.title,
          text: post.body,
        }));

        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsFetching(false);
      }
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (isFetching) {
    content = <p id="loading-fallback">Fetching Posts...</p>;
  } else if (error) {
    content = <ErrorMessage text={error} />;
  } else {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img src={fetchingImg} alt="An abstract illustration of data fetching" />
      {content}
    </main>
  );
}

export default App;
