import React from 'react'

export const ContactForm = () => {
	
	return (
		<form>
			<label><p>Förnamn</p>
				<input type="text" placeholder={ 'Användarnamn' } autoComplete="on"/>
			</label>
			<label><p>Efternamn</p>
				<input type="text" placeholder={ 'Användarnamn' } autoComplete="on"/>
			</label>
			<label><p>E-Post</p>
				<input type="text" placeholder={ 'Användarnamn' } autoComplete="on"/>
			</label>
			<label><p>Meddelande</p>
				<input type="text" placeholder={ 'Användarnamn' } autoComplete="on"/>
			</label>
			<button>Skicka</button>
		</form>
	)
}
