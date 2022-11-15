import Link from "next/link";
import { useAppDispatch } from "../rtk/app/hooke";
import { deletePost } from "../rtk/features/postSlice";

const Post = ({ post }: { post: any }) => {
  const dispatch = useAppDispatch();
  const { id, author, title, comments } = post;
  return (
    <div>
      <Link href={`/post/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>Author: {author.name}</p>
      <p>Total Comments: {comments.length}</p>
      <button onClick={()=>dispatch(deletePost(id))}>Delete</button>
      <br />
    </div>
  );
};

export default Post;
