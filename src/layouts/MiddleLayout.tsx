import { useState } from "react";
//Components
import FeedLayout from "./FeedLayout";
import PostLayout from "./PostLayout";
// React Icons
import { FaVideo, FaFileImage } from "react-icons/fa";
import { BsEmojiLaughing } from "react-icons/bs";
import CommentLayout from "./CommentLayout";

const MiddleLayout = () => {
  const [createPost, setCreatePost] = useState(false);

  const handlePostPopup = () => {
    setCreatePost(true);
    console.log("changed state to true");
  };

  const handleClose = () => {
    setCreatePost(false);
    console.log("changed state to false");
  };

  return (
    <main className="flex w-full flex-col flex-wrap items-center space-y-4 bg-neutral-900 pb-4 pt-20 text-white md:w-[60%]">
      <div className="w-[58.5%]">
        <div className="flex flex-col space-y-4 rounded-lg bg-neutral-800 p-2 pt-4">
          <div className="flex space-x-2 ">
            <div className="h-[35px] min-w-[35px] rounded-full bg-white"></div>
            <button
              className="w-full rounded-full bg-neutral-600 pl-2 text-left text-neutral-300 hover:bg-neutral-500"
              onClick={handlePostPopup}
            >
              What's on your mind, Wizard?
            </button>
          </div>

          <div className="flex items-center justify-evenly border-t-[.5px] border-neutral-600 pt-4">
            <div className="flex min-h-8 w-1/3 justify-center rounded-lg duration-150 ease-out hover:bg-white/10">
              <button className="flex items-center space-x-2 py-2">
                <FaVideo size={24} />
                <p className="">Video</p>
              </button>
            </div>
            <div className="flex min-h-8 w-1/3 justify-center rounded-lg duration-150 ease-out hover:bg-white/10">
              <button className="flex items-center space-x-2 py-2">
                <FaFileImage size={24} />
                <p>Photo</p>
              </button>
            </div>
            <div className="flex min-h-8 w-1/3 justify-center rounded-lg duration-150 ease-out hover:bg-white/10">
              <button className="flex items-center space-x-2 py-2">
                <BsEmojiLaughing size={24} />
                <p>Activity</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {createPost && <PostLayout onClick={() => handleClose()} />}

      <FeedLayout
        img=""
        username="Ron Weasley"
        location="Hogwarts"
        time="Just now"
        text="Chudley Cannons for the win! One day we'll make it to the top! 🧡🏆
            #ChudleyCannons #QuidditchForever"
        CommentLayout={
          <CommentLayout
            username="Draco Malfoy"
            comment="Still dreaming about the Cannons    winning, Weasley? Some things
                never change. 😂 #KeepDreaming"
          />
        }
      />
      <FeedLayout
        img=""
        username="Harry Potter"
        location="Diagon Alley"
        time="2 hours ago"
        text="Ace Defense Against the Dark Arts class with Professor Lupin. Caught the Snitch in today's Quidditch match against Slytherin! 🧹✨

        Big thanks to Hermione for the Transfiguration help. Can’t wait for the Hogsmeade trip this weekend! 🍫🍻

        #HogwartsLife #QuidditchChampion #MagicMoments"
        CommentLayout={
          <CommentLayout
            username="Sirius Black"
            comment="Sounds like you're making the most of it, Harry! Proud of you for catching that Snitch – just like your dad. 🧹✨ Enjoy Hogsmeade, have a Butterbeer for me! 🍻"
          />
        }
      />
      <FeedLayout
        img="../../public/hogwarts-crest.jpg"
        username="Hogwarts Offical"
        location="Hogwarts"
        time="1 day ago"
        text="Our academic term officially starts on September 1st. Ensure you've packed your robes, wands, and all necessary supplies. The Hogwarts Express will be departing from King's Cross Station at 11:00 AM sharp."
        CommentLayout={
          <CommentLayout
            username="Luna Lovegood"
            comment="Can't wait to get back to Hogwarts! I've missed the magical creatures and the delicious treacle tart. Also, I'm super excited about the new Care of Magical Creatures curriculum! See you all on the Express! 🦉✨💫 #HogwartsAdventures #TreacleTartLove"
          />
        }
      />
    </main>
  );
};

export default MiddleLayout;
