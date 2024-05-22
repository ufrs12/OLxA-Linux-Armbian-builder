import { build } from "../../Installer"


const CustomizeImageContents = () => `
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
                `+`${build.lanipchange ? `# Copy network settings
                cp /tmp/overlay/network/interfaces /etc/network` : ""}`+`
        
                # Change motd (welcome message)
                #cat /tmp/overlay/motd/logo.sh > etc/update-motd.d/10-armbian-header

                # Download Zabbix-agent
                wget https://repo.zabbix.com/zabbix/6.0/ubuntu-arm64/pool/main/z/zabbix-release/zabbix-release_6.0-5+ubuntu22.04_all.deb
                dpkg -i zabbix-release_6.0-5+ubuntu22.04_all.deb
                apt update
                apt install zabbix-agent
                systemctl restart zabbix-agent
                systemctl enable zabbix-agent

                # Удаляем файлы первичной смены пароля
                #rm /etc/profile.d/armbian-check-first-login.sh
                #rm /etc/profile.d/armbian-check-first-login-reboot.sh
                # Добавляем пользователя с папкой и sudo
                #useradd -m -p $(perl -e 'print crypt($ARGV[0], "password")' '1234') olia
                #sudo usermod -a -G sudo olia

                #Качаем ASP.NET Core Runtime 8.0
                wget https://download.visualstudio.microsoft.com/download/pr/1e449990-2934-47ee-97fb-b78f0e587c98/1c92c33593932f7a86efa5aff18960ed/dotnet-sdk-8.0.204-linux-arm64.tar.gz
                #Создаем папку
                sudo mkdir /usr/share/dotnet
                #Разархивируем в /usr/share/dotnet/
                sudo tar -xf dotnet-sdk-8.0.204-linux-arm64.tar.gz -C /usr/share/dotnet
                #Установkbdftv атрибут исполняемого файла
                sudo chmod +x /usr/share/dotnet/dotnet
                #Создаем ссылку на файл dotnet
                sudo ln -s /usr/share/dotnet/dotnet /usr/bin/dotnet
                #Удаляем архив
                rm dotnet-sdk-8.0.204-linux-arm64.tar.gz

                #Качаем RapidSCADA
                wget https://rapidscada.ru/download/rapidscada_6.2.1_linux_ru.zip
                #Распаковываем архив в /usr/share/RapidSCADA
                sudo unzip rapidscada_6.2.1_linux_ru.zip -d /usr/share/RapidSCADA
                #Удаляем архив
                rm rapidscada_6.2.1_linux_ru.zip
                #Устанавливаем Rapid SCADA
                sudo dpkg -i /usr/share/RapidSCADA/rapidscada_6.2.1-1_all.deb
                #Создаем директорию журналов
                sudo mkdir /var/log/scada
                #Создаем самоподписанный сертификат
                sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
                #Добавляем строчку в файл (не работает!!! надо делать вручную)
                sudo sh -c "echo 'tmpfs           /var/log/scada  tmpfs   defaults,noatime,size=100m    0    0' >> /etc/fstab"

                #Ставим OpenPLC Runtime
                sudo apt install git
                mkdir /var/OpenPLC
                git clone https://github.com/thiagoralves/OpenPLC_v3.git /var/OpenPLC
                cd /var/OpenPLC/
                ./install.sh linux
`

export default CustomizeImageContents;