import React, { useEffect, useState } from "react";
import "@google/model-viewer"; 
import localImage from "../../assets/human_teeth_and_gum.glb";

const Model = () => {
  const [modelSrc, setModelSrc] = useState(localImage); 
  
  useEffect(() => {
    const getUrl = async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          setModelSrc(url);
        }
      } catch (error) {
        console.log("URL yüklenemedi, yerel model yüklenecek:", error);
      }
    };

    getUrl(localImage);
  }, []);

  return (
    <div>
      <model-viewer
        style={{ height: "400px", width:"auto" }}
        src={localImage}
        allow="*"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        shadow-intensity="1"
        exposure="1.2"
      ></model-viewer>
    </div>
  );
};

export default Model;
