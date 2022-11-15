import { useRouter } from "next/router";
import Comment from "../../components/Comment";
import { useAppSelector } from "../../rtk/app/hooke";

const PostItem = () => {
  const posts = useAppSelector((state) => state.posts.value);
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find((post) => post.id === parseInt(id as string));
  return (
    <div>
      <h3>{post.title}</h3>
      <p>Author: {post.author.name}</p>
      <p>Desc: {post.body}</p>
      {
        post.comments.map((comment: any) => <Comment key={comment.id} comment={comment}></Comment>)
      }
      <br />
    </div>
  );
};

export default PostItem;
