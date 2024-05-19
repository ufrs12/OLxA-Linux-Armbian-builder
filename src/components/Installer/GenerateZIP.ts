import JSZip from "jszip";
import RunContent from "./FilesCreator/scripts/RunContent";
import BuildContent from "./FilesCreator/BuildContent";

export default function GenerateZIP (){
  const zip = new JSZip();
  const builder = zip.folder("builder");
  builder?.file("build.sh", BuildContent());
  
  const scripts = builder?.folder("scripts");
  scripts?.file("run.sh", RunContent());
  
  

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


