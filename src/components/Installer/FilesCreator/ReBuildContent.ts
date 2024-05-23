// import { build } from "../Installer";

const ReBuildContent = () => `
# 1. Copy overlay files for use in customize-image.sh as "/tmp/overlay/"
cp -R ./builder/userpatches/overlay/ ./build/userpatches/


# 2. Assembling file customize-image.sh and move to userpatches
n=$(grep -n ';;' ./build/userpatches/customize-image.sh -m 1 | sed "s/:.*//")
nn=$((n - 1))
echo ` + "${nn}" + `
sed -i.bak "1,` + "${nn}" + `d" ./build/userpatches/customize-image.sh
cat ./Загрузки/builder/userpatches/body-customize-image.sh ./build/userpatches/customize-image.sh> ./Загрузки/builder/userpatches/customize-image.sh
mv ./Загрузки/builder/userpatches/customize-image.sh ./build/userpatches/


# 3. Run Armbian build with options first time
sudo sh ./builder/scripts/run.sh
`;

export default ReBuildContent;

