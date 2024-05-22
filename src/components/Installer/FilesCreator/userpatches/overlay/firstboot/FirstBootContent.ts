import { build } from "../../../../Installer";

export default function FirstBootContent() {
    let content:string = `#!/bin/sh`

    if (build.lanipchange){
        content += `
            #----Смена имени интерфейса----
            # выполняем айпи линк | берем номер строки с превым вхождением "линк/эзер" | чо-то режем
            n=$(ip link | grep -n 'link/ether' | sed "s/:.*//")
            # выполняем айпи линк | строку выше прошлой | берем все после первого двоеточия | берем все что перед первым двоеточием
            name=$(ip link | sed "$((n-1))!D" | cut -d: -f 2- | cut -d: -f 1)
            # выполняем айпи линк | берем строку с превым вхождением "линк/эзер" | берем с 16-го по 33-го символ
            mac=$(ip link | grep "link/ether" -m 1 | cut -c16-33)
            # создаем строку для изменения имени сетевого интерфейса
            #SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="$mac", ATTR{dev_id}=="0x0", ATTR{type}=="1", NAME="eth0"
            ch=$(cat <<EndOfMessage
            KERNEL=="$name", ATTR{address}=="$mac", NAME="eth0"
            EndOfMessage
            )
            #добавляем правило для именования интерфейса
            echo $ch >> /etc/udev/rules.d/70-persistent-net.rules
            `
    }
    else{
        if(build.lanipchange){
            content += `
                #----подстановка актуального имени интерфейса в /etc/network/interfaces----
                # выполняем айпи линк | берем номер строки с превым вхождением "линк/эзер" | чо-то режем
                n=$(ip link | grep -n 'link/ether' | sed "s/:.*//")
                # выполняем айпи линк | строку выше прошлой | берем все после первого двоеточия | берем все что перед первым двоеточием
                name=$(ip link | sed "$((n-1))!D" | cut -d: -f 2- | cut -d: -f 1)
                # меняем 
                sed -i "s/eth0/$name/" /etc/network/interfaces
                `
        }
    }
    content += `
    # удалить файл скрипта
    rm $(realpath $0)
    # выполнить перезагрузку
    sudo reboot
    `
    
    return content;
}