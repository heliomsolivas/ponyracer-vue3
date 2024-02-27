import type { PonyModel } from "./PonyModel";

export interface RaceModel {
  name: string;
  id: number;
  startInstant: string;
  ponies: PonyModel[];
}
