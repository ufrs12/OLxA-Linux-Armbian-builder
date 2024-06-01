import { build } from "../../Installer";
import PLCContent from "./CustomScripts/OLIA/plc";
import SetContent from "./CustomScripts/sys_set/SetContent";
import ZabbixContent from "./CustomScripts/OLxA/ZabbixContent";
import WebminContent from "./CustomScripts/OLxA/WebminContent";
import ScadaContent from "./CustomScripts/OLIA/ScadaContent";

export default function CustomizeImageContents() {

    let content:string = `
    #!/bin/bash
    
    # arguments: $RELEASE $LINUXFAMILY $BOARD $BUILD_DESKTOP
    #
    # This is the image customization script
    
    # NOTE: It is copied to /tmp directory inside the image
    # and executed there inside chroot environment
    # so don't reference any files that are not already installed
    
    # NOTE: If you want to transfer files between chroot and host
    # userpatches/overlay directory on host is bind-mounted to /tmp/overlay in chroot
    # The sd card's root path is accessible via $SDCARD variable.
    
    RELEASE=$1
    LINUXFAMILY=$2
    BOARD=$3
    BUILD_DESKTOP=$4
    
    Main() {
        case $RELEASE in
                    bookworm)
`;
    if (build.lanipchange){
        content += SetContent();
    }
    if (build.olxa.zabbix){
        content += ZabbixContent();
    }
    if (build.olxa.webmin){
        content += WebminContent();
    }
    if (build.olia.scada){
        content += ScadaContent();
    }
    if (build.olia.plc){
        content += PLCContent();
    }

    return content;
}