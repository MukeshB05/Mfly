import { useState, useEffect, useRef } from "react";
import Navigator from "../components/Navigator";

const Tv = () => {
  return (
    <div className="w-full h-screen">
      <iframe 
        src="https://kkxstreamlive.pages.dev" 
        title="KKX Stream Live"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
    <Navigator />
  </>
  );
};

export default Tv;
