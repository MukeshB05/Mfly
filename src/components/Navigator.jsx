import { GoHome, GoHomeFill } from "react-icons/go";
import { IoHeartOutline, IoHeartSharp, IoTv, IoTvOutline } from "react-icons/io5";
import { RiFolderMusicFill, RiFolderMusicLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

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

      <Link to="/Tv">
        <div className="flex flex-col items-center text-sm">
        {location.pathname === "/Tv" ? (
            <IoTv className="text-2xl" />
          ) : (
            <IoTvOutline className="text-2xl" />
          )}
          Live TV
        </div>
      </Link>
    </div>
  );
};

export default Navigator;
