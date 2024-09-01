"use client"
import Link from "next/link";
import {Button} from "@/components/ui/button";


const NavBar = () => {

    return(
        <nav>
            <div className={`w-screen bg-green-300 p-1 h-24 flex items-center justify-center place-items-center`}>
                <div className={`w-5/6 grid grid-cols-2 grid-rows-1 items-center`}>
                    <div className={`flex h-full w-full justify-start items-center`}>
                        <Link href={"/"}>
                            <h1 className="md:text-3xl text-xl font-bold cursor-pointer">Pettodex</h1>
                        </Link>
                    </div>
                    <div className={`flex gap-2 justify-end`}>
                        <Button className={`w-20 md:w-32`} asChild>
                            <Link className={`text-[10px] md:text-lg`} href={`/pets`}>
                                Browse Pets
                            </Link>
                        </Button>
                        <Button className={`w-20 md:w-32`} asChild>
                            <Link href="/" className={`text-[10px] md:text-lg`}>
                                Submit Pet
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>


    );
}

export default NavBar;
