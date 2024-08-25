import Link from "next/link";
import {Button} from "@/components/ui/button";


const NavBar = () => {
    return(
        <nav>
            <div className={`w-screen bg-green-300 p-1 h-24 flex items-center justify-center place-items-center`}>
                <div className={`w-5/6 grid grid-cols-2 grid-rows-1 items-center`}>
                        <div className={`flex h-full w-full justify-start items-center`}>
                        <h1 className="text-3xl font-bold">Pettodex</h1>
                    </div>
                    <div className={`flex gap-2 justify-end`}>
                        <Button>
                            <Link href="/pets">Browse Pets</Link>

                        </Button>
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
