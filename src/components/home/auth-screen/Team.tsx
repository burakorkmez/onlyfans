import RotatedText from "@/components/decorators/RotatedText";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamProps {
	imageUrl: string;
	name: string;
	position: string;
	description: string;
}

const teamList: TeamProps[] = [
	{
		imageUrl: "https://i.pravatar.cc/150?img=35",
		name: "Sarah Thompson",
		position: "Farm Manager",
		description: "Sarah ensures the smooth operation of the farm and ensuring the well-being of all our horses. ",
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=60",
		name: "James Wilson",
		position: "Head Trainer",
		description: "James is our expert in horse training and riding instruction with over 15 years of experience",
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=36",
		name: "Dr. Emily Carter",
		position: "Equine Veterinarian",
		description: "Dr. Carter is our resident veterinarian, dedicated to maintaining the health of our horses.",
	},
	{
		imageUrl: "https://i.pravatar.cc/150?img=17",
		name: "Michael Ramirez",
		position: "Groom and Stable Hand",
		description: "Michael is responsible for the daily care of our horses, including feeding and grooming. ",
	},
];

const Team = () => {
	return (
		<section className='container py-24 sm:py-32'>
			<h2 className='text-2xl sm:text-3xl md:text-5xl text-center tracking-tighter font-bold'>
				Our <RotatedText>Dedicated</RotatedText> Crew
			</h2>

			<p className='mt-4 mb-10 text-md md:text-xl text-muted-foreground text-center'>
				Meet the team that makes our farm a special place for horses and riders alike.
			</p>

			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10'>
				{teamList.map(({ description, imageUrl, name, position }) => (
					<Card key={name} className='bg-muted/50 relative mt-7 flex flex-col justify-center items-center'>
						<CardHeader className='my-8 flex justify-center items-center pb-2'>
							<img
								src={imageUrl}
								alt='Team member'
								className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
							/>
							<CardTitle className='text-center'>{name}</CardTitle>
							<CardDescription className='text-primary'>{position}</CardDescription>
						</CardHeader>

						<CardContent className='text-center pb-4 px-2'>
							<p>{description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
export default Team;
