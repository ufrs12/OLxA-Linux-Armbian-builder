const SetContent = () => `
# Copy network settings
cp /tmp/overlay/network/interfaces /etc/network
# Copy and register firstboot files
cp /tmp/overlay/firstboot/firstboot.sh /etc/init.d/firstboot.sh
sudo chmod +x /etc/init.d/firstboot.sh
cp /tmp/overlay/firstboot/firstboot.service /etc/systemd/system/firstboot.service
sudo systemctl enable firstboot
`;

export default SetContent;