const FeedLayout: React.FC<{
  img: string;
  username: string;
  time: string;
  location: string;
  text: string;
  CommentLayout: JSX.Element;
}> = ({ img, username, time, location, text, CommentLayout }) => {
  return (
    <div className="w-full px-2 md:w-[60%]  md:min-w-[1/2]">
      <div className="flex h-fit w-full flex-col space-y-4 rounded-lg bg-neutral-800 p-2 pt-4">
        <div>
          <div>
            <div className="flex items-center space-x-2 px-2 pb-2">
              <div className="h-[35px] w-[35px] rounded-full bg-white">
                <img
                  className="h-[35px] w-[35px] rounded-full object-cover"
                  src=""
                  alt="user profile pic"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">{username}</p>
                <div className="flex text-sm text-gray-400">
                  <p>{time}</p>
                  <p className="px-1">&bull; {location}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="px-2">{text}</p>
          {img && (
            <img
              className="max-h-[500px] w-full object-cover"
              src={img}
              alt="image"
            />
          )}
        </div>
        <div className="pl-2">
          {/* <GoThumbsup className="rounded-full bg-blue-500 p-1" size={25} /> */}
        </div>
        <div className="flex w-full items-center justify-center border-y-[.5px] border-neutral-600 py-2">
          <div className="flex min-h-8 w-1/2 items-center justify-center rounded-lg  duration-150 ease-out hover:bg-white/10">
            <button className="flex w-full items-center justify-center space-x-2 py-2">
              Like
            </button>
          </div>
          <div className="flex min-h-8 w-1/2 justify-center rounded-lg duration-150 ease-out hover:bg-white/10">
            <button className="flex w-full items-center justify-center space-x-2 py-2">
              Comment
            </button>
          </div>
        </div>
        {/*  ------------------------- Comments ---------------------- */}
        {CommentLayout && <div className="px-2">{CommentLayout}</div>}
      </div>
    </div>
  );
};

// FeedLayout.defaultProps = {
//   username: "username",
//   time: "just now",
//   location: "Hogwarts",
//   text: "",
// };

// FeedLayout.propTypes = {
//   username: PropTypes.string,
//   time: PropTypes.string,
//   location: PropTypes.string,
//   text: PropTypes.string,
// };

export default FeedLayout;
