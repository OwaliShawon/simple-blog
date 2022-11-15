const Comment = ({comment}: {comment: any}) => {
    const {email, body}  = comment;
  return (
    <div>
        <strong>Comment by:{email}</strong>
        <p>{body}</p>
    </div>
  );
};

export default Comment;
