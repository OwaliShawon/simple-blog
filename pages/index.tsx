import Head from 'next/head';
import { useAppDispatch, useAppSelector } from '../rtk/app/hooke';
import { fetchPosts } from '../rtk/features/postSlice';
import styles from '../styles/Home.module.css';

export default function Home({ postsWithComments } : any) {
  const dispatch = useAppDispatch();
  dispatch(fetchPosts(postsWithComments));
  const posts = useAppSelector((state) => state.posts.value);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const resPosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=20`
  );
  const resComments = await fetch(
    `https://jsonplaceholder.typicode.com/comments`
  );
  const resUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const posts: any = await resPosts.json();
  const comments: any = await resComments.json();
  const users: any = await resUsers.json();

    // filtering posts by userId and related comments
    const postsWithComments: any = posts.map((post: any) => {
      return {
        ...post,
        comments: comments.filter((comment: any) => comment.postId === post.id),
        author: users.find((user: any) => user.id === post.userId),
      };
    });

  // Pass data to the page via props
  return { props: { postsWithComments } };
}
