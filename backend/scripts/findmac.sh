#!/bin/sh

# выполняем айпи линк | берем строку с превым вхождением "линк/эзер" | берем с 16-го по 33-го символ
mac=$(ip link | grep "link/ether" -m 1 | cut -c16-33)
# создаем строку для изменения имени сетевого интерфейса
ch= $(cat <<EndOfMessage SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="$mac", ATTR{dev_id}=="0x0", ATTR{type}=="1", NAME="eth0" EndOfMessage)
echo $ch
echo $ch
echo $ch
echo $ch >> /etc/udev/rules.d/70-persistent-net.rules