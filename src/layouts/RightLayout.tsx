// React Icons
import { SlOptions } from "react-icons/sl";

const RightLayout = () => {
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
    <section className="fixed right-0 top-16 hidden h-dvh flex-col items-start bg-neutral-900 md:flex md:w-1/3 lg:w-[20%]">
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
  );
};

export default RightLayout;
