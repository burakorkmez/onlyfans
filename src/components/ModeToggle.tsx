"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<div className='flex flex-wrap gap-2 px-1 md:px-2'>
			<Button variant={"outline"} size={"icon"} onClick={() => setTheme("light")}>
				<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 text-muted-foreground' />
			</Button>
			<Button variant={"outline"} size={"icon"} onClick={() => setTheme("dark")}>
				<MoonIcon className='absolute h-[1.2rem] w-[1.2rem]  transition-all  dark:scale-100 text-muted-foreground' />
			</Button>
		</div>
	);
}
