const ZabbixContent = () => `
wget https://repo.zabbix.com/zabbix/6.0/debian-arm64/pool/main/z/zabbix-release/zabbix-release_6.0-6+debian12_all.deb
dpkg -i zabbix-release_6.0-6+debian12_all.deb
apt update
apt install zabbix-agent2 zabbix-agent2-plugin-*
systemctl enable zabbix-agent2
`;

export default ZabbixContent;