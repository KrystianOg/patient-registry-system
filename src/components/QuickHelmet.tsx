import { Helmet as HelmetAsync } from "react-helmet-async";

type Props = {
	title: string;
	description?: string;
	keywords?: string;
};

const QuickHelmet = ({ title, description, keywords }: Props) => (
	<HelmetAsync>
		<title>{title}</title>
		{description && <meta name="description" content={description} />}
		{keywords && <meta name="keywords" content={keywords} />}
	</HelmetAsync>
);

export default QuickHelmet;
