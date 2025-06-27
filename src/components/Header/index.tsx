import Image from "next/image";

import { Button } from "@/components";

import { menuOptions } from "@/lib/constants/menu";

import Logo from "../../../public/logo-circle.svg"

const Header = ({ activeSection }: { activeSection: string }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between px-[82px] py-[18px] shadow-md bg-white">
            <div className="flex">
                <Image src={Logo} alt="Logo" className="mr-[12px]" />
                <div className="flex flex-col">
                    <label className="font-medium">Ring Strike</label>
                    <label className="text-[12px] text-[#BC090D]">Muay Thai</label>
                </div>
            </div>
            <div className="flex items-center gap-[72px]">
                <ul className="hidden lg:flex gap-[32px]">
                    {menuOptions.map((item, index) => {
                        const isActive = activeSection === item.href.replace("#", "");
                        return (
                            <li key={`menu-${index}`} className="relative">
                                <a
                                    href={item.href}
                                    className={`font-light text-[14px] transition-colors ${isActive ? "text-[#BC090D]" : ""
                                        }`}
                                >
                                    {item.title}
                                </a>
                                {isActive && (
                                    <span className="absolute -bottom-[34px] left-0 w-full h-[4px] bg-[#BC090D]" />
                                )}
                            </li>
                        );
                    })}
                </ul>
                <Button title="Entrar em contato" />
            </div>

        </header>
    );
};

export default Header;