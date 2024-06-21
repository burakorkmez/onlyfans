"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ZoomedImage = ({ className, imgSrc }: { className?: string; imgSrc: string }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = (e.target as HTMLDivElement).getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;

		setMousePosition({ x, y });
	};

	return (
		<div className={cn("w-full relative overflow-hidden h-96", className)} onMouseMove={(e) => handleMouseMove(e)}>
			<Image
				src={imgSrc}
				fill
				alt='Product image'
				style={{
					transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
				}}
				className='transition-transform duration-500 ease-in-out transform hover:scale-[2.5] cursor-pointer rounded-md'
			/>
		</div>
	);
};
export default ZoomedImage;
