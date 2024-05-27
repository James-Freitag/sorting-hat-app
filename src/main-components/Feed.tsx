// React Icons
import { GoThumbsup } from "react-icons/go";

const Feed = () => {
  return (
    <div className="w-1/2">
      <div className="flex h-fit w-full flex-col space-y-4 rounded-lg bg-neutral-800 p-2 pt-4">
        <div>
          <div>
            <div className="flex items-center space-x-2 px-2 pb-2">
              <div className="h-[35px] w-[35px] rounded-full bg-white"></div>
              <div>
                <p className="text-lg font-semibold">Ron Weasley</p>
                <div className="flex text-sm text-gray-400">
                  <p>6 hours ago</p>
                  <p className="px-1">&bull; Hogwarts</p>
                </div>
              </div>
            </div>
          </div>
          <p className="px-2">
            "Chudley Cannons for the win! One day we'll make it to the top! 🧡🏆
            #ChudleyCannons #QuidditchForever"
          </p>
        </div>
        <div className="pl-2">
          <GoThumbsup className="rounded-full bg-blue-500 p-1" size={25} />
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
            <div className="h-[35px] w-[43px] self-start rounded-full bg-white"></div>

            <div className="rounded-lg bg-white/10 p-1">
              <p>Draco Malfoy</p>
              <p className="text-sm">
                Still dreaming about the Cannons winning, Weasley? Some things
                never change. 😂 #KeepDreaming
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
