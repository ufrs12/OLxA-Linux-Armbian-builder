import { build } from "../../../../Installer";

export default function FirstBootContent() {
    let content:string = `#!/bin/sh`

    if (build.lanipchange){
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
    content += `
    # удалить файл скрипта
    rm $(realpath $0)
    # выполнить перезагрузку
    sudo reboot
    `
    
    return content;
}