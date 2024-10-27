'use client'
import Image from 'next/image';
import copy from 'clipboard-copy';

const Card = () => {
  const handleCopy = async () => {
    try {
      await copy('CODE');
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  }
  return(
    <div className="border-[2px] border-black rounded-md flex flex-col gap-y-[20px] items-center py-[15px]">
      <h2 className="w-[80%] text-center" >Промокоды Cosmobet на Бонусы и Фриспины Октябрь 2024</h2>
      <div className="relative border-[2px] border-black w-[80%] h-[40px] flex items-center justify-center rounded-full" >
        <p className="absolute top-[-12px] bg-white px-[6px] text-sm">Бонус код</p>
        <Image onClick={handleCopy} className="absolute right-[10px] cursor-pointer" src="copy-svgrepo-com.svg" alt="copy" width={20} height={20} />
      CODE
      </div>
      <button className="bg-black rounded-xl h-[30px] text-white text-lg px-[10px] py-[5px] flex items-center justify-center">АКТИВИРОВАТЬ</button>
    </div>
  )}

export default Card