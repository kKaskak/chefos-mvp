<script lang="ts">
	import { 
		APP_ENV, 
		APP_ENV_DEV, 
		PROD_BASE_URL, 
		DEV_BASE_URL,
		DEFAULT_META_KEYWORDS,
		SITE_BRAND,
		SOCIAL_IMAGE_ALT,
		SOCIAL_CARD_IMAGE
	} from '$constants';

	interface Props {
		title: string;
		description: string;
		staticImgUrl?: string;
		type: string;
		currentUrl: string;
		originUrl: string;
		path: string;
	}
	
	let {
		title = 'Почистване на прозорци',
		description = 'Варна и околноста. Прозорци почистени от професионалист!',
		staticImgUrl = '/',
		type = 'article',
		currentUrl = '/',
		originUrl = '/',
		path = ''
	}: Props = $props();

	let isDev = $state(APP_ENV === APP_ENV_DEV);
	let baseUrl = $derived(isDev ? DEV_BASE_URL : PROD_BASE_URL);
	
	// Generate proper title
	let currentTitle = $derived(`${title} | ${SITE_BRAND}`);
	
	// Use proper logo for social cards
	let logoUrl = $derived(`${baseUrl}/chefos_logo_1.svg`);
	let socialImageUrl = $derived(`${baseUrl}${SOCIAL_CARD_IMAGE}`);
	let canonicalUrl = $derived(`${baseUrl}${path}`);
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{currentTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={DEFAULT_META_KEYWORDS} />
	<meta name="author" content="Chefo's Cleaning" />
	<link rel="canonical" href={canonicalUrl} />
	
	<!-- Viewport and Mobile Optimization -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content="Chefo's Cleaning" />
	
	<!-- Favicons -->
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/manifest.json" />

	<!-- Open Graph Meta Tags -->
	<meta property="og:locale" content="bg_BG" />
	<meta property="og:locale:alternate" content="en_GB" />
	<meta property="og:site_name" content={SITE_BRAND} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={currentTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={socialImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={SOCIAL_IMAGE_ALT} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:secure_url" content={socialImageUrl} />
	<meta property="og:determiner" content="the" />
	<meta property="og:country_name" content="Bulgaria" />
	<meta property="og:locality" content="Варна" />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={currentTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={socialImageUrl} />
	<meta name="twitter:image:alt" content={SOCIAL_IMAGE_ALT} />
	<meta name="twitter:site" content="@chefoscleaning" />

	<!-- Other Meta Tags -->
	<meta name="robots" content="index,follow" />
	<meta name="language" content="bg" />
	<meta name="generator" content="Svelte" />
	<meta name="geo.placename" content="Варна" />
	<meta name="geo.region" content="BG-03" />
	<meta name="classification" content="Почистване във Варна и околността. Прозорци, витрини, стъкла и офиси почистени от професионалист." />
	<meta name="copyright" content="Copyright Chefos Cleaning - All rights Reserved." />
	<meta name="designer" content="jarek.code" />
	<meta name="rating" content="General" />
	<meta name="distribution" content="Global" />
	<meta name="coverage" content="Worldwide" />

	<!-- Schema.org JSON-LD -->
	{@html `
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "${currentTitle}",
    "url": "${currentUrl}",
    "description": "${description}",
    "image": {
        "@type": "ImageObject",
        "url": "${socialImageUrl}",
        "contentUrl": "${socialImageUrl}",
        "width": 1200,
        "height": 630,
        "caption": "${SOCIAL_IMAGE_ALT}",
        "description": "Чефос Клийнинг - Професионално почистване на прозорци и витрини във Варна"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Варна",
        "postalCode": "9000",
        "addressCountry": "BG"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Чефос Клийнинг",
        "url": "https://chefoscleaning.com",
        "logo": {
            "@type": "ImageObject",
            "url": "${logoUrl}",
            "contentUrl": "${logoUrl}",
            "width": 200,
            "height": 200,
            "caption": "Лого на Чефос Клийнинг",
            "description": "Официално лого на фирма Чефос Клийнинг от Варна"
        }
    },
    "mainEntity": {
        "@type": "WebSite",
        "name": "${SITE_BRAND}",
        "url": "${currentUrl}",
        "potentialAction": {
            "@type": "ReadAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "${currentUrl}"
            }
        }
    }
}
</script>
`}
</svelte:head>
