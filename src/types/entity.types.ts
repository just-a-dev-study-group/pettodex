export interface Entity {
  id: string;
  name: string;
}

export interface PetEntity extends Entity {
  species_id: string;
  owner_id: string;
  sex: string;
  color: string;
}

export interface SubmitPetEntityRequestDto {
  name: string;
  imageFile: File;
}
