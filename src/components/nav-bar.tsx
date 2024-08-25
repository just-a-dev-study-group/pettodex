"use client"
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";


const NavBar = () => {
    const router = useRouter();

    const handleBrowsePets = async () => {
        await router.push("/pets");
    }

    const handleSubmitPet = async () => {
        await router.push("/");
    }

    return(
        <nav>
            <div className={`w-screen bg-green-300 p-1 h-24 flex items-center justify-center place-items-center`}>
                <div className={`w-5/6 grid grid-cols-2 grid-rows-1 items-center`}>
                    <div className={`flex h-full w-full justify-start items-center`}>
                        <h1 onClick={handleSubmitPet} className="text-3xl font-bold cursor-pointer">Pettodex
                        </h1>
                    </div>
                    <div className={`flex gap-2 justify-end`}>
                        <Button onClick={handleBrowsePets}>Browse Pets</Button>
                        <Button>
                            <Link href="/">Submit Pet</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>


    );
}

export default NavBar;
