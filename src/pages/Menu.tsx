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
    <div className="p-6 mt-12 max-w-3xl mx-auto">
      <img
        src="/designs/coffee_cup_decal.png"
        className="absolute top-100 left-3 -translate-y-1/2 -z-10 w-96"
      />
      <img
        src="/designs/croissant_decal.png"
        className="absolute top-350 right-8 -translate-y-1/2 -z-10 w-64 md:w-80"
      />
      <img
        src="/designs/people_decal.png"
        className="absolute top-700 left-3 -z-10 w-96"
      />

      <h1 className="text-xl md:text-3xl font-bold mb-4 py-2 bg-(--yellow) text-black rounded-2xl">
        brunch
      </h1>
      <p className="italic text-gray-600 mb-2">tuesday-sunday 10am–2pm</p>
      {typedMenuList.brunch.map((section, index) => (
        <div key={index}>
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-lg md:text-2xl font-semibold mt-5 text-(--green-accent)">
                {category}
              </h2>
              {section[category].map((item, idx) => (
                <MenuItemCard key={idx} item={item} />
              ))}
            </div>
          ))}
        </div>
      ))}

      <h1 className="text-xl md:text-3xl font-bold mt-8 py-2 bg-(--yellow) text-black rounded-2xl">
        pastries
      </h1>
      {typedMenuList.pastries.map((item, idx) => (
        <MenuItemCard key={idx} item={item} />
      ))}

      <h1 className="text-xl md:text-3xl font-bold mt-8 py-2 bg-(--yellow) text-black rounded-2xl">
        drinks
      </h1>
      {typedMenuList.drinks.map((item, idx) => (
        <MenuItemCard key={idx} item={item} />
      ))}

      <h1 className="text-xl md:text-3xl font-bold mt-8 py-2 bg-(--yellow) text-black rounded-2xl">
        weekly specials
      </h1>
      <p className="text-gray-600 text-xs md:text-sm mt-4">
        please visit us to find out about our weekly special - a new pastry or
        drink!
      </p>
    </div>
  );
};

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <motion.div
    className="pt-2"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-sm md:text-lg font-medium text-black mt-2">
      {item.name} - ${item.price}
    </h3>
    <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
    {item.diet && (
      <p className="text-xs md:text-sm italic text-green-600">{item.diet}</p>
    )}
    {item.milk_options && (
      <p className="text-xs md:text-sm italic text-blue-600">
        milk options: {item.milk_options.join(", ")}
      </p>
    )}
    {item.add_ons && (
      <p className="text-xs md:text-sm italic text-blue-600">
        add-ons:{" "}
        {Object.entries(item.add_ons)
          .map(([addon, price]) => `${addon} +$${price}`)
          .join(", ")}
      </p>
    )}
  </motion.div>
);

export default Menu;
