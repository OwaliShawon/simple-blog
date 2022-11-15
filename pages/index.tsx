import Head from 'next/head';
import Image from 'next/image';
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
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
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
