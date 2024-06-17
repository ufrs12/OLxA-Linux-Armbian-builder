// const WebminContent = () => `
// apt update -y
// apt install gnupg2 curl -y
// cd /tmp
// curl -o setup-repos.sh https://raw.githubusercontent.com/webmin/webmin/master/setup-repos.sh
// sh setup-repos.sh
// apt update -y
// apt install webmin --install-recommends -y
// `;
const WebminContent = () => `
sudo apt-get update
sudo apt-get install software-properties-common apt-transport-https wget
sudo wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb http://download.webmin.com/download/repository sarge contrib"
sudo apt-get update
sudo apt-get install webmin
`;

export default WebminContent;
