"use server";

import { db } from "@/lib/firebase/firebase-admin";
import { validateAuth } from "@/server/utils/validate-auth";
import { PetEntity } from "@/types/entity.types";
import { put } from "@vercel/blob";
import sharp from "sharp";

const submitPetEntity = async (formData: FormData) => {
  try {
    // Make sure the user is logged in
    const tokens = await validateAuth();

    const name = formData.get("name") as string;
    const imageFile = formData.get("imageFile") as File;

    // Generate a new ID for the pet entity
    const newId = db.collection("entity").doc().id;

    // Process the form data
    const petData: PetEntity = {
      id: newId,
      name: name,
      owner_id: tokens.decodedToken.uid,
      imageUrl: "",
      species_id: "", // This needs to be determined or provided
      sex: "", // This needs to be determined or provided
      color: "", // This needs to be determined or provided
      createdAt: new Date().toISOString(),
    };

    // Upload the image file to the Vercel Blob storage
    if (imageFile) {
      const blob = await imageFile.arrayBuffer();
      const buffer = Buffer.from(blob);

      // Compress the image
      const compressedBuffer = await compressImage(buffer);

      const { url } = await put(`${newId}.webp`, compressedBuffer, {
        access: "public",
        contentType: "image/webp",
      });

      petData.imageUrl = url;

      // Send a post request to identify the pet
      const response = await fetch(
        "https://h4md7j42-8000.asse.devtunnels.ms/identify/single",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        }
      );

      const identificationData = await response.text();

      if (!response.ok) {
        throw new Error("Failed to identify the pet");
      }

      petData.species_id = identificationData;
    }

    await db.collection("entity").doc(newId).set(petData);
    return { success: true, id: newId };
  } catch (error) {
    console.error("Error creating pet entity:", error);
    return { success: false, error: "Failed to create pet entity" };
  }
};

// Function to compress image using sharp
async function compressImage(
  buffer: Buffer,
  quality: number = 80,
  maxWidth: number = 800,
  maxHeight: number = 600
): Promise<Buffer> {
  return sharp(buffer)
    .resize({
      width: maxWidth,
      height: maxHeight,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality, effort: 6 }) // Increased compression effort
    .toBuffer();
}

export default submitPetEntity;
