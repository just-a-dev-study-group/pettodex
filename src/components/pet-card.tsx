import {PetEntity} from "@/types/entity.types";
import Image from 'next/image';




const PetCard = ({ pet } : PetEntity) => {
    console.log(pet.imageUrl);
    return (
        <div className={`flex flex-col gap-1 p-1 bg-gray-200 rounded-lg h-full hover:-translate-y-2 transition duration-200 ease`}>
            <Image width={200} height={200} alt={`image of a pet`} src={pet.imageUrl} className={`rounded-sm`}/>
            <div key={pet.name} className={`bg-transparent`}>{pet.name}</div>
            <div className={``}>{pet.color}</div>
        </div>
    )
}

export default PetCard;