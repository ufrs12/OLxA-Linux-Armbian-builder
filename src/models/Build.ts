
export interface OLIA{
  zabbix: boolean;
  scada:  boolean;
  plc:    boolean;
}
export class Build {
  board:      string;
  kernel:     string;
  armversion: string;
  basicprogs: string[];
  lanchange:  boolean;
  lanname:    string;
  lanip:      string;
  lansubnet:  string;
  langate:    string;
  olia:       OLIA;

  constructor(armversion: string, board: string, kernel: string, lanname: string){
    this.armversion =  armversion;
    this.board      = board;
    this.kernel     = kernel;
    this.basicprogs = [];
    this.lanname    = lanname,
    this.lanchange  = false
    this.lanip      = '192.168.1.2'
    this.lansubnet  = '255.255.255.0'
    this.langate    = '192.168.1.1'
    this.olia = {
      zabbix: false,
      scada:  false,
      plc:    false
    }
  }
}