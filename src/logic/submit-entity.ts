"use server";

import { db } from "@/lib/firebase/firebase-admin";
import { validateAuth } from "@/server/utils/validate-auth";
import { PetEntity } from "@/types/entity.types";
import { put } from "@vercel/blob";

const submitPetEntity = async (formData: FormData) => {
  try {
    // Make sure the user is logged in
    const tokens = await validateAuth();

    const name = formData.get("name") as string;
    const imageFile = formData.get("imageFile") as File;

    // Generate a new ID for the pet entity
    const newId = db.collection("entity").doc().id;

    tokens.decodedToken.uid;

    // Process the form data
    const petData: PetEntity = {
      id: newId,
      name: name,
      owner_id: tokens.decodedToken.uid,
      imageUrl: "",
      species_id: "", // This needs to be determined or provided
      sex: "", // This needs to be determined or provided
      color: "", // This needs to be determined or provided
    };

    // Upload the image file to the Vercel Blob storage
    if (imageFile) {
      const blob = await imageFile.arrayBuffer();
      const originalFileType = imageFile.type.split("/").pop();
      const { url } = await put(`${newId}.${originalFileType}`, blob, {
        access: "public",
        contentType: imageFile.type,
      });

      petData.imageUrl = url;
    }

    await db.collection("entity").doc(newId).set(petData);
    return { success: true, id: newId };
  } catch (error) {
    console.error("Error creating pet entity:", error);
    return { success: false, error: "Failed to create pet entity" };
  }
};

export default submitPetEntity;
