import JSZip from "jszip";
import RunContent from "./FilesCreator/scripts/RunContent";
import BuildContent from "./FilesCreator/BuildContent";
import ReBuildContent from "./FilesCreator/ReBuildContent";
import NetworkContent from "./FilesCreator/userpatches/overlay/network/NetworkContent";
import CustomizeImageContents from "./FilesCreator/userpatches/CustomizeImageContents";
import FirstBootContent from "./FilesCreator/userpatches/overlay/FirstBootContent";

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
        overlay?.file("firstboot.sh", FirstBootContent());
      
        const network = overlay?.folder("network");
          network?.file("interfaces", NetworkContent());
          
          

  
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


