"use client"
import getAllEntities from "@/server/fetch-pets";
import {Button} from "@/components/ui/button";

const Pets = () => {

    const handleGetAllEntities =  async () => {
        const pets = await getAllEntities();
        console.log(pets);
    };


    return (
        <div>
            <h1>Pets</h1>
            <Button onClick={handleGetAllEntities}>Get All Pets</Button>
        </div>
    );
}

export default Pets