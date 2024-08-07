const CommentLayout: React.FC<{ username: string; comment: string }> = ({
  username,
  comment,
}) => {
  return (
    <div className="comment h-auto w-full">
      <div className="flex w-full items-center space-x-2 px-2">
        <div className="h-[35px] min-w-[35px] self-start rounded-full bg-white">
          <img
            className="h-[35px] w-[35px] rounded-full object-cover"
            src=""
            alt="user profile pic"
          />
        </div>

        <div className="rounded-lg bg-white/10 p-1">
          <p>{username}</p>
          <p className="text-sm">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentLayout;
