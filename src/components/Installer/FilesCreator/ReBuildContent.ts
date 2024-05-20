// import { build } from "../Installer";

const ReBuildContent = () => `
# 1. Copy overlay files for use in customize-image.sh as "/tmp/overlay/"
#cp -R ./builder/userpatches/orpi3lts/overlay/network ./build/userpatches/overlay/

# 2. Assembling file customize-image.sh and move to userpatches
sed -i.bak "1,22d" ./build/userpatches/ccustomize-image.sh
cat ./Загрузки/builder/userpatches/body-customize-image.sh ./build/userpatches/ccustomize-image.sh> ./Загрузки/builder/userpatches/ccustomize-image.sh
mv ./Загрузки/builder/userpatches/ccustomize-image.sh ./build/userpatches/


# 3. Run Armbian build with options first time
#./builder/scripts/run.sh
`;

export default ReBuildContent;

