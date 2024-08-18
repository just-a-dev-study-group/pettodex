"use server";

import { db } from "@/lib/firebase/firebase-admin";
import { PetEntity } from "@/types/entity.types";

const submitPetEntity = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const imageFile = formData.get("imageFile") as File;

    // Generate a new ID for the pet entity
    const newId = db.collection("entity").doc().id;

    // Process the form data
    const petData: PetEntity = {
      id: newId,
      name: name,
      species_id: "", // This needs to be determined or provided
      owner_id: "", // This needs to be determined or provided
      sex: "", // This needs to be determined or provided
      color: "", // This needs to be determined or provided
    };

    // TODO: Handle image file upload (imageFile)

    await db.collection("entity").doc(newId).set(petData);
    return { success: true, id: newId };
  } catch (error) {
    console.error("Error creating pet entity:", error);
    return { success: false, error: "Failed to create pet entity" };
  }
};

export default submitPetEntity;
