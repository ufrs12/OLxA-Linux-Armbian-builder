
export interface OLIA{
  zabbix: boolean;
  scada:  boolean;
  plc:    boolean;
}

export class Build {
  board:        string;
  kernel:       string;
  armversion:   string;
  basicprogs:   string[] = [];
  lanipchange:  boolean = false;
  lannchange:   boolean = false;
  landefn:      string = "eth0";
  lanname:      string = "eth0";
  lanip:        string = '192.168.1.2';
  lansubnet:    string = '255.255.255.0';
  langate:      string = '192.168.1.1';
  olia:         OLIA = { zabbix: false, scada: false, plc: false};

  constructor(armversion: string, board: string, kernel: string){
    this.armversion = armversion;
    this.board      = board;
    this.kernel     = kernel;
  }
}