/**
 * Single source of truth for blog post URLs.
 *
 * The glob loader may or may not include the file extension in `post.id`
 * depending on the Astro version. Every route that builds or resolves a
 * `/blog/<slug>` URL must go through this helper so the blog index, the
 * detail pages and the RSS feed can never drift apart.
 */
export function postSlug(id: string): string {
	return id.replace(/\.[^/.]+$/, '');
}

/** Absolute-ish site path for a post, with trailing slash. */
export function postUrl(id: string): string {
	return `/blog/${postSlug(id)}/`;
}
