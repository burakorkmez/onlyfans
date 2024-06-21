"use server";

import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getUserProfileAction() {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user) return null;

	const currentUser = await prisma.user.findUnique({ where: { id: user.id } });
	return currentUser;
}

export async function updateUserProfileAction({ name, image }: { name: string; image: string }) {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	if (!user) throw new Error("Unauthorized");

	const updatedFields: Partial<User> = {};

	if (name) updatedFields.name = name;
	if (image) updatedFields.image = image;

	const updatedUser = await prisma.user.update({
		where: { id: user.id },
		data: updatedFields,
	});

	revalidatePath("/update-profile");

	return { success: true, user: updatedUser };
}
