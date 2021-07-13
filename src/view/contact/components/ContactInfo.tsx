import React from 'react'
import map from '../map.png'

export const ContactInfo = () => {
	
	return (
		<>
			<p>Vi svarar gärna på frågor angående IT-konsulter, utbildare eller andra eventuella samarbeten
				i Göteborg. Kontakta oss här nedan eller hör av dig direkt till någon av våra medarbetare.
				Vi återkommer så fort vi kan.</p>
			<h3>Codic Consulting: +46-765-519-733</h3>
			<h3>Codic Education: +46-768-990-065</h3>
			<h3>hello@codic.se</h3>
			<h1>Här finns vi</h1>
			<p>Drottninggatan 38, Göteborg</p>
			<img src={ map } alt="Karta över Göteborg"/>
		</>
	)
}
