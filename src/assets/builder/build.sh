# 1. Download repository Armbian build
git clone --depth=1 --branch=main https://github.com/ufrs12/build

# 2. Add packages
echo 'mc' >> ./build/config/cli/common/main/packages
echo 'nginx' >> ./build/config/cli/common/main/packages
echo 'unzip' >> ./build/config/cli/common/main/packages

# 3. Run Armbian build with options first time
./builder/scripts/run.sh