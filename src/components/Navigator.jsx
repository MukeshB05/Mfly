import { GoHome, GoHomeFill } from "react-icons/go";
import { IoHeartOutline, IoHeartSharp, } from "react-icons/io5";
import { RiFolderMusicFill, RiFolderMusicLine } from "react-icons/ri";
import { MdLiveTv } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react"; // Added useState import

const Navigator = () => {
  const location = useLocation();
  const [showTVModal, setShowTVModal] = useState(false);

  const openTVModal = () => setShowTVModal(true);
  const closeTVModal = () => setShowTVModal(false);
  
return (
  <>
    <div className="lg:hidden fixed bottom-0 z-20 w-full Navigator h-[3.6rem] lg:h-[3.5rem] flex items-center justify-around bg-white border-t border-gray-200">
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

        <button onClick={openTVModal}>
          <div className="flex flex-col items-center text-sm">
            <MdLiveTv className="text-2xl" />
            Live TV
          </div>
        </button>
      </div> {/* This closing div was missing */}

      {showTVModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full h-full max-w-4xl max-h-[80vh] bg-black">
            <button 
              className="absolute -top-10 right-0 text-white text-2xl z-10 p-2"
              onClick={closeTVModal}
            >
              × Close
            </button>
            <iframe
              src="https://dreamplay.pages.dev/"
              className="w-full h-full border-none"
              title="Dreamly5 Live TV"
              allowFullScreen
              frameBorder="0"
              scrolling="yes"
              style={{ overflow: 'hidden' }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigator;
