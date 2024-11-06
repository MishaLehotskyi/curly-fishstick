import Image from 'next/image';

const Header = () => (
  <div
    className="flex flex-row gap-x-[1vw] justify-between bg-black
    items-center border-b-black border-b-[2px] lg:pl-[10vw] lg:pr-[10vw] px-[25px]"
  >
    <Image
      src="/casino-gambling-game.svg"
      alt="casino-gambling-game"
      width={80}
      height={80}
    />
    <div className="relative" >
      <input
        className="border-black border-[2px] outline-none
        rounded-full h-[30px] lg:w-[20vw] w-[60vw] pl-[5px] pr-[35px]" type="text"
      />
      <Image
        src="/search-svgrepo-com.svg"
        alt="casino-gambling-search"
        width={20}
        height={20}
        className="absolute right-[10px] top-[5px]"
      />
    </div>
  </div>
)

export default Header