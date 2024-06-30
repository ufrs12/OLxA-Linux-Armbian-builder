import { build } from "../../Installer";

const RunContent = () => `
#!/bin/bash
./build/compile.sh  PREFER_DOCKER=no \\
                    INCLUDE_HOME_DIR=no \\
                    EXPERT=yes \\
                    BUILD_MINIMAL=yes \\
                    BUILD_DESKTOP=no \\
                    BRANCH=${build.kernel} \\
                    RELEASE=bookworm \\
                    BOARD=${build.board} \\
                    KERNEL_CONFIGURE=no
`;

export default RunContent;

