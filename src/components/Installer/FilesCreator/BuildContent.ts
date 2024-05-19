import { build } from "../Installer";
import { armbian } from "../Installer";

const BuildContent = () => `
# 1. Download repository Armbian build
git clone --depth=1 --branch=v${armbian.armVersion} https://github.com/armbian/build

# 2. Add packages
echo 'mc' >> ./build/config/cli/common/main/packages
echo 'nginx' >> ./build/config/cli/common/main/packages
echo 'unzip' >> ./build/config/cli/common/main/packages

# 3. Run Armbian build with options first time
./builder/scripts/run.sh
`;

export default BuildContent;

