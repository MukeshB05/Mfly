import { GoHome, GoHomeFill } from "react-icons/go";
import { IoHeartOutline, IoHeartSharp, } from "react-icons/io5";
import { RiFolderMusicFill, RiFolderMusicLine } from "react-icons/ri";
import { IoMdTV } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigator = () => {
  const location = useLocation();

  return (
    <div className="lg:hidden fixed bottom-0 z-20 w-full Navigator h-[3.6rem] lg:h-[3.5rem] flex items-center justify-around">
      <Link to="/">
        <div className="flex flex-col items-center text-sm">
        {location.pathname === "/" ? (
            <GoHomeFill className="text-2xl" />
          ) : (
            <GoHome className="text-2xl" />
          )}
          
          Home
        </div>
      </Link>

      <Link to="/Playlist">
        <div className="flex flex-col items-center text-sm">
          {location.pathname === "/Playlist" ? (
            <RiFolderMusicFill className="text-2xl" />
          ) : (
            <RiFolderMusicLine className="text-2xl" />
          )}
          Playlist
        </div>
      </Link>
      
      <Link to="/Favourite">
        <div className="flex flex-col items-center text-sm">
        {location.pathname === "/Favourite" ? (
            <IoHeartSharp className="text-2xl" />
          ) : (
            <IoHeartOutline className="text-2xl" />
          )}
          Favourite
        </div>
      </Link>

      {/* TV Link that opens modal */}
        <button onClick={() => setShowTVModal(true)}>
          <div className="flex flex-col items-center text-sm">
            <IoMdTV className="text-2xl" />
            TV
          </div>
        </button>
      </div>

      {/* TV Modal with iframe */}
      {showTVModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full h-full max-w-4xl max-h-[80vh] bg-black">
            <button 
              className="absolute -top-10 right-0 text-white text-2xl z-10"
              onClick={() => setShowTVModal(false)}
            >
              Close
            </button>
            <iframe
              src="https://kkxstreamlive.pages.dev/"
              className="w-full h-full border-none"
              title="KKX Stream Live TV"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigator;
