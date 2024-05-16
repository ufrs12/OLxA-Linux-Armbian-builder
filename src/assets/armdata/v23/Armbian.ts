import { Board, Kernel, Supp } from '../../../../backend/tofront/v23/boards/models';

export class Device implements Board {
  name: string;
  supp: Supp;
  text: string;
  kernels: Kernel[];

  constructor(name: string, supp: Supp, text: string, kernels: Kernel[]) {
    this.name = name;
    this.supp = supp;
    this.text = text;
    this.kernels = kernels;
  }
}
