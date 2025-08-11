import { DEFAULT_META_DESCRIPTION, DEFAULT_META_TITLE, SOCIAL_CARD_IMAGE } from '$constants';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
	return {
		defaultMeta: {
			currentUrl: url.href,
			originUrl: url.origin,
			path: url.pathname,
			description: DEFAULT_META_DESCRIPTION,
			title: DEFAULT_META_TITLE,
			type: 'website',
			image: {
				url: `${url.origin}${SOCIAL_CARD_IMAGE}`,
				alt: 'Почистване на прозорци'
			}
		}
	};
};
