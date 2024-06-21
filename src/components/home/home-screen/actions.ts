"use server";

import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getPostsAction() {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user) throw new Error("Unauthorized");

	const posts = await prisma.post.findMany({
		include: {
			comments: {
				include: {
					user: true,
				},
			},
			likesList: { where: { userId: user.id } },
		},
	});

	return posts;
}

export async function deletePostAction(postId: string) {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	const post = await prisma.post.findUnique({ where: { id: postId } });

	if (post?.userId !== user?.id) throw new Error("Only admin can delete posts");

	await prisma.post.delete({ where: { id: postId } });

	return { success: true };
}

export async function likePostAction(postId: string) {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user) {
		throw new Error("Unauthorized");
	}

	const userProfile = await prisma.user.findUnique({ where: { id: user.id } });
	if (!userProfile?.isSubscribed) return;

	const post = await prisma.post.findUnique({
		where: { id: postId },
		select: { likes: true, likesList: { where: { userId: user.id } } },
	});

	if (!post) throw new Error("Post not found");

	let newLikes: number;
	if (post.likesList.length > 0) {
		newLikes = Math.max(post.likes - 1, 0);
		await prisma.like.deleteMany({
			where: { postId: postId, userId: user.id },
		});
	} else {
		newLikes = post.likes + 1;
		await prisma.like.create({
			data: { postId: postId, userId: user.id },
		});
	}

	await prisma.post.update({
		where: { id: postId },
		data: { likes: newLikes },
	});

	return { success: true };
}

export async function commentOnPostAction(postId: string, text: string) {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user) throw new Error("Unauthorized");

	const userProfile = await prisma.user.findUnique({ where: { id: user.id } });
	if (!userProfile?.isSubscribed) return;

	const comment = await prisma.comment.create({
		data: {
			text,
			postId,
			userId: user.id,
		},
	});

	return { success: true };
}
