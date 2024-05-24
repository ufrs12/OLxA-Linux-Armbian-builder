import { build } from "../../../../Installer";

export default function NetworkContent() {
    let name:string = build.landefn;
    if (build.lannchange){
        name = build.lanname;
    }
    let content:string = `
source /etc/network/interfaces.d/*
# Network is managed by Network manager
auto lo
iface lo inet loopback


auto ${name}
iface ${name} inet static
address ${build.lanip}
gateway ${build.langate}
netmask ${build.lansubnet}
`;

    return content;
}


