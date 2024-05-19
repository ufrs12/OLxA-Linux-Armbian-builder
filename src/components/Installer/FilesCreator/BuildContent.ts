import { build } from "../Installer";

const BuildContent = () => `
# 1. Download repository Armbian build
git clone --depth=1 --branch=v${build.armversion} https://github.com/armbian/build

# 2. Add packages
` + build.basicprogs.map(e => `echo '${e}' >> ./build/config/cli/common/main/packages`).join("\n") + `

# 3. Run Armbian build with options first time
./builder/scripts/run.sh
`;

export default BuildContent;

