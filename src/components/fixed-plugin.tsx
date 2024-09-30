"use client";
import Image from "next/image";


export function FixedPlugin() {
  return (
    <a href="/" target="_blank">
      <button
        color="white"
        
        className="!fixed bg-[#273272] bottom-4 text-white right-4 flex gap-1 pl-2 items-center p-2 rounded"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="ht"
        />{" "}
        Chat with us, we're are online!  jivochat
      </button>
    </a>
  );
}
