import { Skeleton } from "../ui/skeleton";

const PostSkeleton = () => {
	return (
		<div className='w-full'>
			<div className='flex flex-col items-center space-y-3 w-full'>
				<div className='flex flex-col gap-2 w-full'>
					<Skeleton className='h-4 w-3/4' />
					<Skeleton className='h-4 w-3/4' />
				</div>
				<Skeleton className='h-[250px] w-full rounded-xl' />
			</div>
		</div>
	);
};
export default PostSkeleton;
