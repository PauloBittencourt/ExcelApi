import { v4 as uuid } from "uuid";

export class CreateMovieRating {
  public readonly id: string;
  public name: string;
  public gender: string;
  public score : string;
  public evaluatorName: string;
  public observation: string;
  public code: string;

  public readonly createdAt: Date;

  constructor(
    props: Omit<CreateMovieRating, "id" | "createdAt">,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }

    this.createdAt = new Date();
  }
}
