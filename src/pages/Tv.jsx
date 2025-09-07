// TV.jsx (new component for the TV page)
const Tv = () => {
  return (
    <div class="relative w-full h-96">
      <iframe class="absolute top-0 left-0 w-full h-full"
        src="https://kkxstreamlive.pages.dev" 
        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
    </iframe>
    </div>
  );
};

export default Tv;
