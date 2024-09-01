import getAllEntities from "@/server/fetch-pets";
import PetCard from "@/components/pet-card";

const Pets = async () => {
        const pets = await getAllEntities();
        const petList = pets.entities;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className={`flex flex-col gap-1 h-full  place-items-center justify-self-start w-full`}>
                <h1 className={`text-4xl md:my-6 my-3 font-bold`}>Pets</h1>
            </div>
            <div className={`grid md:gap-2 gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-1 min-h-screen`}>

                {petList && petList.map((pet) => {
                    return (
                        <PetCard
                            key={pet.name}
                            pet={pet}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Pets