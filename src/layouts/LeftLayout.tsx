const LeftLayout = () => {
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
  return (
    <section className="fixed left-0 top-16 hidden h-full bg-neutral-900 pt-4 lg:block lg:w-[20%]">
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
  );
};

export default LeftLayout;
