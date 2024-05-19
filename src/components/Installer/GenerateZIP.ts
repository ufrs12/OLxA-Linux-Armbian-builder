import JSZip from "jszip";
import RunContent from "./FilesCreator/RunContent";

export default function GenerateZIP (){
  const zip = new JSZip();
                    
  zip.file("run.sh", RunContent());

  zip.generateAsync({ type: "blob" }).then(function(blob) {
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = "compile.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};


