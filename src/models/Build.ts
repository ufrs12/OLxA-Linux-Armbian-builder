
export class Build {
  board:      string;
  kernel:     string;
  armversion: string;
  basicprogs: string[];

  constructor(armversion: string, board: string, kernel: string){
    this.armversion =  armversion;
    this.board = board;
    this.kernel = kernel;
    this.basicprogs = [];
  }
}