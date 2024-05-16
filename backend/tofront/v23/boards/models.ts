export interface Board {
    name:    string;
    supp:    Supp;
    text:    string;
    kernels: Kernel[];
}

export enum Kernel {
    Collabora = "collabora",
    Current = "current",
    Edge = "edge",
    Legacy = "legacy",
    Vendor = "vendor",
}

export enum Supp {
    Conf = ".conf",
    Csc = ".csc",
    EOS = ".eos",
    Md = ".md",
    Tvb = ".tvb",
    Wip = ".wip",
}
