import { build } from "../../../../Installer";

export default function FirstBootContent() {
    let content:string = `#!/bin/sh`

    if (build.lanipchange){
        content += `
#----подстановка актуального имени интерфейса в /etc/network/interfaces----
# Получаем имя сетевого интерфейса
name=$(nmcli device status | awk '/ether/ && !/lo/ { print $1 }')
# меняем имя в конфигурационном файле
sed -i "s/eth0/$name/" /etc/network/interfaces
`
    }
    content += `
# отключаем автозауск сервиса
sudo systemctl disable firstboot
# удаляем файл сервиса
rm /etc/systemd/system/firstboot.service
# удалить файл скрипта
rm $(realpath $0)
# выполнить перезагрузку
sudo reboot
`
    
    return content;
}