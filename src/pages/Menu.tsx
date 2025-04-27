import { motion } from "framer-motion";
import MenuList from "../utils/menu.json";

type MenuItem = {
  name: string;
  description: string;
  price: number;
  diet?: string;
  add_ons?: { [key: string]: number };
  milk_options?: string[];
};

type BrunchSection = {
  starters: MenuItem[];
  salads: MenuItem[];
  mains: MenuItem[];
  sides: MenuItem[];
};

type Menu = {
  brunch: BrunchSection[];
  pastries: MenuItem[];
  drinks: MenuItem[];
};

type BrunchCategory = keyof BrunchSection;
const categories: BrunchCategory[] = ["starters", "salads", "mains", "sides"];

const Menu = () => {
  const typedMenuList = MenuList as Menu;

  return (
    <div className="flex flex-col justify-center items-center max-w-3xl mx-auto p-6 my-12">
      <img
        src="/designs/coffee_cup_decal.png"
        className="absolute top-100 left-3 -translate-y-1/2 -z-10 w-96 opacity-40 md:opacity-100"
      />
      <img
        src="/designs/croissant_decal.png"
        className="absolute top-350 right-8 -translate-y-1/2 -z-10 w-64 md:w-80 opacity-40 md:opacity-100"
      />
      <img
        src="/designs/people_decal.png"
        className="absolute top-700 left-3 -z-10 w-96 opacity-40 md:opacity-100"
      />

      <motion.h1
        className="w-9/10 md:w-full text-2xl md:text-[75px] font-semibold text-white py-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        cafe menu
      </motion.h1>

      {/* brunch */}
      <h1 className="w-fit text-xl md:text-4xl font-bold text-white bg-(--dark-green) rounded-2xl mb-4 mt-6 py-2 px-8">
        brunch
      </h1>
      <p className="italic text-gray-300 text-lg mb-2">tuesday-sunday 10am–2pm</p>

      {typedMenuList.brunch.map((section, index) => (
        <div key={index}>
          {categories.map((category) => (
            <div key={category} className="mt-12">
              <h2 className="text-lg md:text-2xl font-semibold uppercase mb-1">
                {category}
              </h2>
              {section[category].map((item, idx) => (
                <MenuItemCard key={idx} item={item} />
              ))}
            </div>
          ))}
        </div>
      ))}

      {/* pastries */}
      <h1 className="w-fit text-xl md:text-4xl font-bold text-white bg-(--dark-green) rounded-2xl mb-4 mt-15 py-2 px-8">
        pastries
      </h1>
      {typedMenuList.pastries.map((item, idx) => (
        <MenuItemCard key={idx} item={item} />
      ))}

      {/* drinks */}
      <h1 className="w-fit text-xl md:text-4xl font-bold text-white bg-(--dark-green) rounded-2xl mb-4 mt-15 py-2 px-8">
        drinks
      </h1>
      {typedMenuList.drinks.map((item, idx) => (
        <MenuItemCard key={idx} item={item} />
      ))}

      {/* weekly specials */}
      <h1 className="w-fit text-xl md:text-4xl font-bold text-white bg-(--dark-green) rounded-2xl mb-4 mt-15 py-2 px-8">
        weekly specials
      </h1>
      <p className="text-gray-300 text-xs md:text-base mt-4">
        Please visit us in person to find out about our weekly special - a new pastry or
        drink!
      </p>
    </div>
  );
};

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <motion.div
    className="bg-off-white rounded-2xl px-4 py-1 mb-2 shadow-lg hover:shadow-2xl transition-all"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-sm md:text-lg font-medium text-dark-green my-2">
      {item.name} - ${item.price}
    </h3>
    <p className="text-gray-500 text-xs md:text-sm mb-1">{item.description}</p>
    {item.diet && (
      <p className="text-xs md:text-sm italic text-green-300">{item.diet}</p>
    )}
    {item.milk_options && (
      <p className="text-xs md:text-sm italic text-blue-400">
        milk options: {item.milk_options.join(", ")}
      </p>
    )}
    {item.add_ons && (
      <p className="text-xs md:text-sm italic text-purple-200">
        add-ons:{" "}
        {Object.entries(item.add_ons)
          .map(([addon, price]) => `${addon} +$${price}`)
          .join(", ")}
      </p>
    )}
  </motion.div>
);

export default Menu;
