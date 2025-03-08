import React from "react";
import MenuList from "../utils/menu.json"

type MenuItem = {
  name: string;
  description: string;
  price: number;
  diet?: string;
  add_ons?: { [key: string]: number };
  milk_options?: string[];
};

const Menu = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 bg-(--yellow) text-black">brunch</h1>
      {MenuList.brunch.map((section, index) => (
        <div key={index}>
          <p className="italic text-gray-600 mb-2">{section.times}</p>

          <h2 className="text-2xl font-semibold mt-5 text-(--green-accent)">starters</h2>
          {section.starters.map((item, idx) => (
            <MenuItemCard key={idx} item={item} />
          ))}

          <h2 className="text-2xl font-semibold mt-5 text-(--green-accent)">salads</h2>
          {section.salads.map((item, idx) => (
            <MenuItemCard key={idx} item={item} />
          ))}

          <h2 className="text-2xl font-semibold mt-5 text-(--green-accent)">mains</h2>
          {section.mains.map((item, idx) => (
            <MenuItemCard key={idx} item={item} />
          ))}

          <h2 className="text-2xl font-semibold mt-5 text-(--green-accent)">sides</h2>
          {section.sides.map((item, idx) => (
            <MenuItemCard key={idx} item={item} />
          ))}
        </div>
      ))}

      <h1 className="text-3xl font-bold mt-8 bg-(--yellow) text-black">pastries</h1>
      {MenuList.pastries.map((item, idx) => (
        <MenuItemCard key={idx} item={item} />
      ))}

      <h1 className="text-3xl font-bold mt-8 bg-(--yellow) text-black">drinks</h1>
      {MenuList.drinks.map((item, idx) => (
        <MenuItemCard key={idx} item={item} />
      ))}
      
      <h1 className="text-3xl font-bold mt-8 bg-(--yellow) text-black">weekly specials</h1>
      <p className="text-gray-600 text-sm mt-4">please visit us to find out about your weekly special - a new pastry or drink!</p>
    </div>
  );
};

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <div className="pt-2">
    <h3 className="text-lg font-medium text-black mt-2">{item.name} - ${item.price}</h3>
    <p className="text-gray-600 text-sm">{item.description}</p>
    {item.diet && <p className="text-sm italic text-green-600">{item.diet}</p>}
    {item.milk_options && (
      <p className="text-sm italic text-blue-600">
        milk options: {item.milk_options.join(", ")}
      </p>
    )}
    {item.add_ons && (
      <p className="text-sm italic text-blue-600">
        Add-ons:{" "}
        {Object.entries(item.add_ons)
          .map(([addon, price]) => `${addon} +$${price}`)
          .join(", ")}
      </p>
    )}
  </div>
);

export default Menu;
