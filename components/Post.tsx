import Link from "next/link";

const Post = ({ post }: { post: any }) => {
  const { id, author, title, comments } = post;
  return (
    <div>
      <Link href={`/post/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>Author: {author.name}</p>
      <p>Total Comments: {comments.length}</p>
      <br />
    </div>
  );
};

export default Post;
