import { build } from "../Installer";


const ReBuildContent = () => `
# 1. Copy overlay files for use in customize-image.sh as "/tmp/overlay/"
cp -R ./builder/userpatches/orpi3lts/overlay/network ./build/userpatches/overlay/

# 2. Assembling file customize-image.sh and move to userpatches
# cd ./builder/userpatches/orpi3lts
# cat customize-image_begin.sh customize-image_body.sh customize-image_end.sh > customize-image.sh
# cd
# mv ./builder/userpatches/orpi3lts/customize-image.sh ./build/userpatches/

# 3. Run Armbian build with options first time
./builder/scripts/run.sh
`;

export default ReBuildContent;

