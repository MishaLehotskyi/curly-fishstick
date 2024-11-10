'use client'
import Image from 'next/image';
import copy from 'clipboard-copy';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  mediaUrl: string,
  description: string,
  code: string,
  url: string,
  photo?: boolean,
}

const Card: React.FC<CardProps> = ({
  mediaUrl,
  description,
  code,
  url,
  photo,
}) => {
  const handleCopy = async () => {
    try {
      await copy(code);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  }
  return(
    <div
      className="border-[2px] border-black rounded-md flex flex-col gap-y-[20px] items-center py-[15px] bg-black text-white justify-between overflow-hidden">
      <div className="flex justify-center items-center min-h-[320px] mt-[-15px]" >
        {photo
          ? (
            <Image src={mediaUrl} alt="casino-gambling-game" width={400} height={270} />
          )
          : (
            <video autoPlay muted loop playsInline className="mt-[-15px]">
              <source src={mediaUrl}
                type="video/mp4"/>
            </video>
          )
        }
      </div>

      <h2 className="w-[80%] text-center">{description}</h2>
      <div
        className="relative border-[2px] border-white w-[80%] h-[40px] flex items-center justify-center rounded-full">
        <p className="absolute top-[-12px] bg-black px-[6px] text-sm">Бонус код</p>
        <Image onClick={handleCopy} className="absolute right-[10px] cursor-pointer" src="copy-svgrepo-com.svg"
          alt="copy" width={20} height={20}/>
        {code}
      </div>
      <Link
        href={url}
        target="_blank"
        className="bg-red-600 rounded-full h-[40px] font-semibold text-white text-md px-[10px] py-[5px] flex items-center justify-center hover:shadow-lg hover:shadow-red-500/50 transition-shadow ease-in-out duration-500">Получить бонус
      </Link>
    </div>
  )
}

export default Card