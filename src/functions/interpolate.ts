/**
 * method of constructing (finding) new data points based on
 *  the range of a discrete set of known data points
 */
export const interpolate = (start: number, end: number, precision: number) => {
	const n =
    Math.max(start / precision, end / precision) -
    Math.min(start / precision, end / precision)
	return Array.from(Array(n).keys())
		.map((v) => start + v * precision)
		.concat(end)
}
