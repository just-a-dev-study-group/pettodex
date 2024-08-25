"use server"

import {PetEntity} from "@/types/entity.types";
import {db} from "@/lib/firebase/firebase-admin";

export default async function getAllEntities(){
    try {
        const entitiesSnapshot = await db.collection("entity").get();
        const entities: PetEntity[] = [];

        entitiesSnapshot.forEach((doc) => {
            entities.push(doc.data() as PetEntity);
        });

        return { success: true, entities };
    } catch (error) {
        console.error("Error retrieving entities:", error);
        return { success: false, error: "Failed to retrieve entities" };
    }

    // try {
    //     const entitiesRef = db.collection("entity");
    // }catch (error) {
    //
    // }
};
