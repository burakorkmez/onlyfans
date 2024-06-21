import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const UnderlinedText = ({ children, className }: { children: ReactNode; className?: string }) => {
	return (
		<span className={cn("underline underline-offset-4 decoration-dashed decoration-sky-400", className)}>
			{children}
		</span>
	);
};
export default UnderlinedText;
