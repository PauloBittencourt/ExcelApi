import { v4 as uuid } from "uuid";

export class CreateMovie {
  public readonly id: string;
  public name: string;
  public gender: string;
  public duration : string;
  public director: string;
  public actors: string;
  public code: string;

  public readonly createdAt: Date;

  constructor(
    props: Omit<CreateMovie, "id" | "createdAt">,
    id?: string
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }

    this.createdAt = new Date();
  }
}
