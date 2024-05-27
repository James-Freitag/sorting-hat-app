// React Icons
import { SlOptions } from "react-icons/sl";
import { FaVideo, FaFileImage } from "react-icons/fa";
import { BsEmojiLaughing } from "react-icons/bs";
import Feed from "./Feed";

const Middle = () => {
  const menuArray: string[] = [
    "User",
    "Friends",
    "Memories",
    "Saved",
    "Houses",
    "Video",
    "Diagon Alley",
    "Events",
  ];

  const contacts: string[] = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley",
    "Albus Dumbledore",
    "Severus Snape",
    "Draco Malfoy",
    "Minerva McGonagall",
    "Rubeus Hagrid",
    "Ginny Weasley",
    "Sirius Black",
    "Remus Lupin",
    "Bellatrix Lestrange",
    "Lucius Malfoy",
    "Narcissa Malfoy",
    "Dolores Umbridge",
    "Luna Lovegood",
    "Neville Longbottom",
    "Cho Chang",
    "Cedric Diggory",
    "Viktor Krum",
    "Fleur Delacour",
    "Nymphadora Tonks",
    "Gilderoy Lockhart",
    "Argus Filch",
    "Sybill Trelawney",
  ];

  return (
    <div className="flex min-h-screen w-full">
      {/* ----------------Left Side--------------------------- */}
      <section className="hidden bg-neutral-900 pt-20 lg:block lg:w-[20%]">
        <div className="px-2">
          <ul className="space-y-6 text-neutral-200">
            {menuArray.map((item: string, index: number) => (
              <li key={index} className="px-2 font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* ----------------Middle--------------------------- */}
      <main className=" flex w-full flex-col flex-wrap items-center space-y-4 bg-neutral-900 pt-20 text-white md:w-3/4 lg:w-[60%]">
        <div className="w-1/2">
          <div className="flex flex-col space-y-4 rounded-lg bg-neutral-800 p-2 pt-4">
            <div className="flex space-x-2 ">
              <div className="h-[35px] w-[38px] rounded-full bg-white"></div>
              <input
                type="text"
                placeholder="What's on your mind, Wizard?"
                className="w-full rounded-full pl-2 text-black"
              />
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
        <Feed />
      </main>
      {/* ----------------Right Side--------------------------- */}
      <section className="hidden h-dvh flex-col items-start bg-neutral-900 pt-20 md:flex md:w-1/3 lg:w-[20%]">
        <div className="flex w-full items-center justify-between px-2 pt-2 text-center md:px-4">
          <p className="text-lg font-semibold text-neutral-400">Contacts</p>
          <div className="flex items-center justify-center">
            <button>
              <SlOptions size={20} color="gray" />
            </button>
          </div>
        </div>
        {/* ---------------------- Contacts ---------------- */}
        <div className="right-section w-full overflow-auto">
          <ul className="w-full space-y-4 px-4 pt-12 text-white">
            {contacts.map((person: string, index: number) => (
              <li key={index}>{person}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Middle;
