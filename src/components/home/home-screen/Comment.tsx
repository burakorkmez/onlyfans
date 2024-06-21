import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Prisma } from "@prisma/client";

type CommentWithUser = Prisma.CommentGetPayload<{
	include: {
		user: true;
	};
}>;

const Comment = ({ comment }: { comment: CommentWithUser }) => {
	return (
		<div className='flex gap-2 border-b py-2'>
			<Avatar>
				<AvatarImage src={comment.user.image || "/user-placeholder.png"} className='object-cover' />
				<AvatarFallback>{comment.user.name[0]}</AvatarFallback>
			</Avatar>
			<div className='flex flex-col w-full'>
				<div className='flex justify-between items-center'>
					<span className='font-semibold text-sm text-muted-foreground'>{comment.user.name}</span>
					<span className='text-sm text-muted-foreground'>
						{new Date(comment.createdAt).toLocaleDateString()}
					</span>
				</div>
				<p className='text-sm leading-tight'>{comment.text}</p>
			</div>
		</div>
	);
};
export default Comment;
