import "./top-buttons-menu.css";
import { Cat, Dog, DotsSixVertical, Heart, House } from "@phosphor-icons/react";

const servicesPet = [
  { icon: <Dog />, label: "Rações para Cães" },
  { icon: <Cat />, label: "Rações para Gatos" },
  { icon: <House />, label: "Casinhas" },
  { icon: <DotsSixVertical />, label: "Farmácia Vet" },
  { icon: <Heart />, label: "Todos os produtos" },
];

const TopButtonsMenu = () => {
  return (
    <div className="flex flex-col h-full max-sm:m-auto">
      <div className="flex overflow-x-auto  gap-6 sm:mt-2 lg:mt-6 ml-4 mr-4 pt-6 justify-between items-center ">
        <ul className="flex gap-[24px] items-center font-bold text-primary text-[11px]">
          {servicesPet.map((service) => (
            <li
              key={service.label}
              className="flex w-64 m-auto text-white font-semibold p-4 rounded-full gap-2 justify-center items-center top-button-menu bg-auxiliary-blue  hover:border-solid text-base  "
            >
              {service.icon}
              {service.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopButtonsMenu;
