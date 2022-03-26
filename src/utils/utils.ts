export function getTutorialUrl(
  seriesSlug: string,
  index: number,
  slug: string
) {
  return `/tutorial/${seriesSlug}/${String(index).padStart(2, "0")}-${slug}`;
}
