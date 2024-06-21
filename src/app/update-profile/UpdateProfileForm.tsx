"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { useEffect, useState } from "react";
import { getUserProfileAction, updateUserProfileAction } from "./actions";
import { useToast } from "@/components/ui/use-toast";

const UpdateProfileForm = () => {
	const [mediaUrl, setMediaUrl] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [profileImage, setProfileImage] = useState("");

	const { toast } = useToast();

	const { data: userProfile } = useQuery({
		queryKey: ["userProfile"],
		queryFn: async () => await getUserProfileAction(),
	});

	const { mutate: updateProfile, isPending } = useMutation({
		mutationKey: ["updateProfile"],
		mutationFn: updateUserProfileAction,
		onSuccess: () => {
			toast({
				title: "Profile updated",
				description: "Your profile has been updated successfully.",
			});
		},
		onError: (error) => {
			toast({
				title: "Error updating profile",
				description: error.message,
				variant: "destructive",
			});
		},
	});

	const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		updateProfile({ name, image: mediaUrl });
	};

	useEffect(() => {
		if (userProfile) {
			setName(userProfile.name);
		}
	}, [userProfile]);

	return (
		<div className='px-2 md:px-10 my-20'>
			<Card>
				<CardHeader>
					<CardTitle className='text-2xl'>Update Profile</CardTitle>
				</CardHeader>

				<CardContent>
					<div className='flex justify-center'>
						<Avatar className='w-20 h-20'>
							<AvatarImage
								src={mediaUrl || userProfile?.image || "/user-placeholder.png"}
								className='object-cover'
							/>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>

					<form onSubmit={(e) => handleUpdateProfile(e)}>
						<Label>Name</Label>
						<Input
							placeholder='Enter your name'
							value={name}
							className='my-2'
							onChange={(e) => setName(e.target.value)}
						/>

						<Label>Email</Label>

						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger className='w-full' type='button'>
									<Input disabled value={userProfile?.email} className='my-2' />
								</TooltipTrigger>
								<TooltipContent>
									<p className='text-sm'>For security reasons, your email cannot be changed. 😥</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>

						<CldUploadWidget
							signatureEndpoint={"/api/sign-image"}
							onSuccess={(result, { widget }) => {
								setMediaUrl((result.info as CloudinaryUploadWidgetInfo).secure_url);
								widget.close();
							}}
						>
							{({ open }) => {
								return (
									<Button
										onClick={() => open()}
										variant={"outline"}
										type='button'
										className='w-full mt-2 mb-4'
									>
										Change Image
									</Button>
								);
							}}
						</CldUploadWidget>

						<Button className='w-full' type='submit' disabled={isPending}>
							{isPending ? "Updating..." : "Update"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};
export default UpdateProfileForm;
