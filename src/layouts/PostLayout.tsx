import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";

const PostLayout = (props: any) => {
  return (
    <div className=" absolute bottom-0 right-0 top-14 flex h-auto w-full items-center justify-center bg-neutral-900/90 text-neutral-300 ">
      <div className="flex h-[400px] w-[400px] flex-col rounded-lg border-[1px] border-neutral-600 bg-neutral-800 px-2 duration-150 ease-in-out md:w-[500px]">
        <div className="relative flex h-[30%] w-full items-center justify-center border-b-[1px] border-neutral-600 text-2xl font-semibold">
          <p className="w-full text-center">Flagrate!</p>
          <button onClick={() => props.onClick()} className="absolute right-3">
            <IoIosCloseCircleOutline size={45} />
          </button>
        </div>
        <div className="h-full w-full ">
          <div className="flex items-center space-x-2 px-2 pb-2">
            <div className="h-[35px] w-[35px] rounded-full bg-white">
              <img
                className="h-[35px] w-[35px] rounded-full object-cover"
                src=""
                alt="User"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">User Name</p>
              <div className="flex text-sm text-white">
                <div className="flex items-center space-x-1 rounded-lg bg-neutral-600 px-2">
                  <FaUserFriends />
                  <p>Friends</p>
                </div>
              </div>
            </div>
          </div>
          <input
            className="h-auto w-full border-none bg-neutral-800 px-1 text-3xl text-neutral-200 caret-neutral-200 outline-none"
            type="text"
            placeholder="What's on your mind, Wizard?"
          />
        </div>
        <div className="h-[30%] w-full ">
          <button
            onClick={() => props.onClick()}
            className="h-3/4 w-full rounded-lg bg-neutral-700 text-lg font-semibold hover:bg-neutral-600"
          >
            Depulso
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
