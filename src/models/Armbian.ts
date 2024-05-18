import boardsData from "../armdata/v23/boards/boards_all.json"

interface Board {
  name: string;
  supp: string;
  text: string;
  kernels: string[];
}

// enum Supp {
//   Conf = ".conf",
//   Csc = ".csc",
//   EOS = ".eos",
//   Md = ".md",
//   Tvb = ".tvb",
//   Wip = ".wip",
// }

// enum Kernel {
//   Collabora = "collabora",
//   Current = "current",
//   Edge = "edge",
//   Legacy = "legacy",
//   Vendor = "vendor",
// }

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