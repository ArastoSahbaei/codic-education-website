export function debounce(func, wait, immediate) {
	var timeout
	return function () {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		var context = this, args = arguments
		var later = function () {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}