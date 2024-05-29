apt update -y
apt install gnupg2 curl -y
cd /tmp
curl -o setup-repos.sh https://raw.githubusercontent.com/webmin/webmin/master/setup-repos.sh
sh setup-repos.sh
apt update -y
apt install webmin --install-recommends -y