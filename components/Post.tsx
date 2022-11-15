import { Button, Card, Col } from 'antd';
import 'antd/dist/antd.css';
import Link from "next/link";
import { useAppDispatch } from "../rtk/app/hooke";
import { deletePost } from "../rtk/features/postSlice";

const Post = ({ post }: { post: any }) => {
  const dispatch = useAppDispatch();
  const { id, author, title, comments } = post;
  return (
    <div style={{ margin: "5px" }}>
    <Col span={4}>
       <Card style={{ width: 300, height: 250 }}>
            <Link  href={`/post/${id}`}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h3><b>Title:</b></h3>
                <h3 style={{ marginLeft: "5px", color: "#0008C1" }}>{title}</h3>
              </div>
            </Link>
            <p> <b>Author:</b> {author.name}</p>
            <p> <b>Total Comments:</b> {comments.length}</p>
            <Button onClick={()=>dispatch(deletePost(id))} type="primary" danger>
                Delete
            </Button>
        </Card>
      </Col>   
  </div>
  );
};

export default Post;
