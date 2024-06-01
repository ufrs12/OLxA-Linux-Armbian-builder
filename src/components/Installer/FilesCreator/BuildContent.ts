import { build } from "../Installer";

const BuildContent = () => `
# 1. Download repository Armbian build
if ! [ -d ./build/ ]; then
git clone --depth=1 --branch=v${build.armversion} https://github.com/armbian/build
fi

# 2. Backup
# 2. Add packages
` + build.basicprogs.map(e => `echo '${e}' >> ./build/config/cli/common/main/packages`).join("\n") + `

# 3. Run Armbian build with options first time
sudo sh ./builder/scripts/run.sh
`;

export default BuildContent;
