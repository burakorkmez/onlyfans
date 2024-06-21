import { Skeleton } from "../ui/skeleton";

const ProductSkeleton = () => {
	return (
		<div className='w-3/4 max-w-48'>
			<div className='flex flex-col items-center space-y-3 w-full'>
				<div className='flex justify-between gap-2 w-full'>
					<Skeleton className='h-4 w-[90px]' />
					<Skeleton className='h-4 w-[50px]' />
				</div>
				<Skeleton className='h-[250px] w-full rounded-xl' />
				<div className='space-y-2 w-full'>
					<Skeleton className='h-4 w-full' />
					<Skeleton className='h-4 w-3/4' />
				</div>
			</div>
		</div>
	);
};
export default ProductSkeleton;
