// TV.jsx (new component for the TV page)
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
  );
};

export default Tv;
