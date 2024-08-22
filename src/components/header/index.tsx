import Link from "next/link";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { CircleUser, Menu, Rocket } from "lucide-react";

export function Header() {
    return(
        <div className="bg-white flex justify-between py-6 md:px-24 px-5">
            <Link href="/" className="flex items-center gap-2">
                <Rocket className="text-psColor-400"></Rocket>
                <h1 className="text-sm font-semibold">PrimeStore</h1>
            </Link>

            <div className="hidden md:flex gap-12 items-center">
                <div className="flex lg:gap-12 gap-4 text-sm">
                    <Link href="/" className="hover:text-psColor-400">
                        Início
                    </Link>

                    <Link href="/" className="hover:text-psColor-400">
                        Quem Somos
                    </Link>

                    <Link href="/products" className="hover:text-psColor-400">
                        Produtos
                    </Link>

                    <Link href="/" className="hover:text-psColor-400">
                        Fale Conosco
                    </Link>
                </div>

                <div className="text-psColor-500 hover:text-psColor-400">
                    <Link href="/login" className="flex items-center gap-2 text-sm font-semibold">
                        <CircleUser className="w-5 h-5"/>
                        Entrar
                    </Link>
                </div>
            </div>

            <div className="flex items-center md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger><Menu/></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href="/">
                                    Início
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <Link href="/">
                                    Quem Somos
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <Link href="/products">
                                    Produtos
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <Link href="/">
                                    Fale Conosco
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem className="text-psColor-500">
                                <Link href="/login" className="flex gap-2 font-semibold">
                                <CircleUser className="w-5 h-5"/>
                                    Entrar
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}