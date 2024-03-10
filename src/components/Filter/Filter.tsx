import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

export default function Filter() {
    return (
        <div className="">
            <div className="md:hidden flex justify-center w-screen gap-4">
                <button className="flex justify-center items-center gap-2 w-32 h-12 bg-primary text-white antialiased font-bold">
                    <MdFilterList />
                    <span>Filtrar</span>
                </button>
                <button className="flex justify-between items-center w-52 h-12 border rounded border-gray-200 text-brand-secundary px-4">
                    <span>Relevancia</span>
                    <FaChevronDown />
                </button>
            </div>
            <div className="hidden md:block flex flex-col w-64 min-w-64 m-2">
                <h1 style={{
                    color: "var(--gray-900, #000305)",
                    fontFamily: "Poppins",
                    fontSize: "25px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "150%",
                }}>Filtrar por:</h1>
                <div className="flex flex-col">
                    <h1 style={{
                        color: "var(--gray-900,  #5F686D))",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "150%",
                    }}>Preço</h1>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">Até R$25,00</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">R$26,00 á R$60,00</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">R$61,00 á R$180,00</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">mais de R$181,00</label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 style={{
                        color: "var(--gray-900,  #5F686D))",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "150%",
                    }}>Marcas</h1>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">Alinutre</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">Biofresh</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">Pedigree</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">Royal Canin</label>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 style={{
                        color: "var(--gray-900,  #5F686D))",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "150%",
                    }}>Idade</h1>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">Adultos</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">Filhotes</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">Idosos</label>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 style={{
                        color: "var(--gray-900,  #5F686D))",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "150%",
                    }}>Especiais</h1>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">Castrado</label>
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded m-2" />
                        <label className="m-2 text-sm font-semibold text-black">Sem corante</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
