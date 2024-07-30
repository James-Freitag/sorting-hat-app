const FeedLayout = () => {
  return (
    <div className="w-1/2">
      <div className="flex h-fit w-full flex-col space-y-4 rounded-lg bg-neutral-800 p-2 pt-4">
        <div>
          <div>
            <div className="flex items-center space-x-2 px-2 pb-2">
              <div className="h-[35px] w-[35px] rounded-full bg-white">
                <img
                  className="h-[35px] w-[35px] rounded-full object-cover"
                  src="../../public/ronpic.jpg"
                  alt="Pic of Ron"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">User name</p>
                <div className="flex text-sm text-gray-400">
                  <p>time - hours ago</p>
                  <p className="px-1">&bull; Location</p>
                </div>
              </div>
            </div>
          </div>
          <p className="px-2">Post Text</p>
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
        <div className="comment h-auto w-full">
          <div className="flex w-full items-center space-x-2 px-2">
            <div className="h-[35px] min-w-[35px] self-start rounded-full bg-white">
              <img
                className="h-[35px] w-[35px] rounded-full object-cover"
                src="../../public/dracopic.jpg"
                alt="Draco Pic"
              />
            </div>

            <div className="rounded-lg bg-white/10 p-1">
              <p>User Name</p>
              <p className="text-sm">Comment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedLayout;
