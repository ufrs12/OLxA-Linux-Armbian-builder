const PLCContent = () => `
#Ставим OpenPLC Runtime
sudo apt install git
mkdir /var/OpenPLC
git clone https://github.com/thiagoralves/OpenPLC_v3.git /var/OpenPLC
cd /var/OpenPLC/
./install.sh linux
`;

export default PLCContent;
