import boardsData from "./boards/boards_all.json"

export interface Board {
  name: string;
  supp: string;
  text: string;
  kernels: string[];
}

export class Armbian {
  armVersion: string;
  boards: Board[];
  basicProgs: string[];

  constructor(armVersion: string, basicProgs: string[]){
    this.armVersion = armVersion;
    this.boards = boardsData;
    this.basicProgs = basicProgs;
  }
}