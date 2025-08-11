import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => ({
	metaData: {
		currentUrl: url.href,
		originUrl: url.origin,
		path: url.pathname,
		description: 'Професионално почистване на прозорци, витрини, апартаменти, офиси и фасади във Варна. Качествено почистване с екологични продукти.',
		title: 'Начало',
		type: 'website'
	}
}); 