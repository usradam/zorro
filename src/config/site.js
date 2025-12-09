// Get site URL from environment variable, use default value if not set
// Note: Please set the correct PUBLIC_SITE_URL in .env file after first deployment
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://portfolio.ricoui.com/';

export const siteConfig = {
	title: "A Tale of Two Zorros Across Time",
	author: "Adam Graham | LAIS 363",
	url: SITE_URL,
	mail: "",
	// resume add your resume file path here: /assets/resume.pdf
	resume: "",
	utm: {
		source: `${SITE_URL}`,
		medium: "referral",
		campaign: "navigation",
	},
	meta:{
		title: " Zorro and Zorro: A Tale of Two Zorros Across Time",
		description: "A look at the two iconic portrayals of Zorro in film history, comparing the 1940 film starring Tyrone Power and the 1998 adaptation featuring Antonio Banderas.",
		keywords: "zorro, movies, film",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "ricouii",
	},
	// social links
	social:{
		twitter: "",
		twitterName: "",
		github: "",
		blog: "",
		xiaohongshu:""
	},
};

// Footer
export const socialLinks = [
];


