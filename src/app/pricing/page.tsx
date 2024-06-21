import BaseLayout from "@/components/BaseLayout";
import Pricing from "@/components/Pricing";

const Page = () => {
	return (
		<BaseLayout renderRightPanel={false}>
			<Pricing />
		</BaseLayout>
	);
};
export default Page;
