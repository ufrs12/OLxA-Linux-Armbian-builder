import JSZip from "jszip";
import RunContent from "./FilesCreator/scripts/RunContent";
import BuildContent from "./FilesCreator/BuildContent";
import ReBuildContent from "./FilesCreator/ReBuildContent";
import NetworkContent from "./FilesCreator/userpatches/overlay/network/NetworkContent";
import CustomizeImageContents from "./FilesCreator/userpatches/CustomizeImageContents";
import FirstBootContent from "./FilesCreator/userpatches/overlay/firstboot/FirstBootContent";
import FirstBootServiceContent from "./FilesCreator/userpatches/overlay/firstboot/FirstBootServiceContent copy";

export default function GenerateZIP (){
  const zip = new JSZip();
  
  const builder = zip.folder("builder");
    builder?.file("build.sh", BuildContent());
    builder?.file("rebuild.sh", ReBuildContent());
  
    const scripts = builder?.folder("scripts");
      scripts?.file("run.sh", RunContent());

    const userpatches = builder?.folder("userpatches");
      userpatches?.file("body-customize-image.sh", CustomizeImageContents());  

      const overlay = userpatches?.folder("overlay");
      
        const network = overlay?.folder("network");
          network?.file("interfaces", NetworkContent());

        const firstboot = overlay?.folder("firstboot");
          firstboot?.file("firstboot.sh", FirstBootContent());
          firstboot?.file("firstboot.service", FirstBootServiceContent());
          
  zip.generateAsync({ type: "blob" }).then(function(blob) {
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = "builder.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};


