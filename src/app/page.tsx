"use client";

import LogoutButton from "@/components/logout-button";
import { useState, FormEvent } from "react";
import Image from "next/image";
import submitPetEntity from "@/logic/submit-entity";

export default function Home() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [petName, setPetName] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!imageFile) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("name", petName);
    formData.append("imageFile", imageFile);

    try {
      const result = await submitPetEntity(formData);
      if (result.success) {
        alert(`Pet entity created successfully with ID: ${result.id}`);
        resetForm();
      } else {
        alert(`Failed to create pet entity: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting pet entity:", error);
      alert("An error occurred while submitting the pet entity");
    }
  };

  const resetForm = () => {
    setPetName("");
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-8">Pettodex</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
          <label
            htmlFor="image-upload"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Upload Pet Image
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            capture="environment"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-primary file:text-primary-foreground
              hover:file:bg-primary/90
              cursor-pointer"
          />
        </div>

        {imagePreview && (
          <div className="mb-6">
            <Image
              src={imagePreview}
              alt="Pet preview"
              width={300}
              height={300}
              className="max-w-full h-auto rounded-md mx-auto"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>
        )}

        <div className="mb-6">
          <label
            htmlFor="pet-name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Pet Name (Optional)
          </label>
          <input
            type="text"
            id="pet-name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter pet name"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mb-6 hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>

      <div className="flex flex-col items-center">
        <LogoutButton />
      </div>
    </main>
  );
}
