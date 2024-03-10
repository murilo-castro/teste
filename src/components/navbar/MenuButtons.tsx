"use client";
import { Heartbeat, List, PawPrint } from "@phosphor-icons/react";
import "./dropdown.css";

const menus = [
  {
    label: "Produtos",
    href: "products",
    icon: <List size={24} />,
    childs: [
      {
        label: "Cães",
        childs: [
          { label: "Ração" },
          { label: "Remédios" },
          { label: "Roupas e acessórios" },
          { label: "Brinquedos" },
        ],
      },
      {
        label: "Gatos",
        childs: [
          { label: "Ração" },
          { label: "Remédios" },
          { label: "Roupas e acessórios" },
          { label: "Brinquedos" },
        ],
      },
      {
        label: "Outros Pets",
        childs: [
          { label: "Ração" },
          { label: "Remédios" },
          { label: "Roupas e acessórios" },
          { label: "Brinquedos" },
        ],
      },
    ],
  },
  { label: "Cuidados Pet", icon: <Heartbeat size={24} />, childs: [] },
  { label: "Roteiros Pet Family", icon: <PawPrint size={24} />, childs: [] },
];

export default function MenuButtons() {
  return (
    <div>
      <nav className="flex flex-row space-x-4 text-sm font-semibold px-6 dropdown">
        {menus.map((menu) => (
          <a key={menu.label} href={menu.href} className="flex items-center gap-2 mr-4">
            {menu.icon}
            <span className="hidden md:block text-lg font-bold">
              {menu.label}
              { false && menu.childs.length > 0
                ? menu.childs.map((m) => {
                    return (
                      <div key={m.label} className="dropdown-content">
                        <a href="#">
                          Link 1
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            style={{
                              float: "right",
                            }}
                          >
                            <path
                              d="M7.3335 4.6665L10.0002 7.99984L7.3335 11.3332"
                              stroke="#062A3C"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                        <a href="#">
                          Link 2
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            style={{
                              float: "right",
                            }}
                          >
                            <path
                              d="M7.3335 4.6665L10.0002 7.99984L7.3335 11.3332"
                              stroke="#062A3C"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                        <a href="#">
                          Link 3
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            style={{
                              float: "right",
                            }}
                          >
                            <path
                              d="M7.3335 4.6665L10.0002 7.99984L7.3335 11.3332"
                              stroke="#062A3C"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    );
                  })
                : null}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}
