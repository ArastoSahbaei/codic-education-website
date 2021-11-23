import React from 'react'
import { styled, makeStyles } from '@material-ui/core/styles'
import { primaryColor } from 'shared/styles/GlobalStyle'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const getSteps = () => {
	return ['Logga in', 'Adress', 'Betalningssätt', 'Bekräfta', 'Färdig']
}

const getStepContent = (step: number) => {
	switch (step) {
	case 0:
		return 'Steg 1 innehåll - Logga in'  // Add the wanted components here 
	case 1:
		return 'Steg 2 innehåll - Adress'
	case 2:
		return 'Steg 3 innehåll - Betalningssätt'
	case 3:
		return 'Steg 4 innehåll - Bekräfta'
	case 4:
		return 'Steg 5 innehåll - Färdig'
	default:
		return 'Okänt steg'
	}
}

export const CheckoutStepper = () => {
	const [activeStep, setActiveStep] = React.useState(0)
	const steps = getSteps()

	const useStyles = makeStyles(() => ({
		root: {
			// Styles for StepIcons
			'& .MuiStepIcon-active': { color: primaryColor },
			'& .MuiStepIcon-completed': { color: primaryColor },
			'& .Mui-disabled .MuiStepIcon-root': { color: 'grey' },
			// Styles for lines between stepicons
			'& .MuiStepConnector-lineHorizontal': {
				borderTopWidth: 4,
				borderColor: 'lightgrey'
			},
			'& .MuiStepConnector-active .MuiStepConnector-lineHorizontal': {
				borderColor: primaryColor
			},
			'& .MuiStepConnector-completed .MuiStepConnector-lineHorizontal': {
				borderColor: primaryColor
			}
		}
	}))

	const classes = useStyles()

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
		
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	return (
		<>
			<div>
				<Stepper className={classes.root} alternativeLabel={true} activeStep={activeStep}>
					{steps.map((label) => {
						const stepProps = {}
						const labelProps = {}
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						)
					})}
				</Stepper>
				{activeStep === steps.length ? (
					<div>
						<Typography >
                            Alla steg är avklarade - du är färdig med din beställning
						</Typography>
						<Button onClick={handleReset}>Reset</Button>
					</div>
				) : (
					<div>
						<Typography > {getStepContent(activeStep)}</Typography>
						<div>
							<Button disabled={activeStep === 0} onClick={handleBack}>Föregående steg</Button>
							<ColorButton variant='contained' onClick={handleNext}>
								{activeStep === steps.length - 1 ? 'Avsluta' : 'Nästa steg'}
							</ColorButton>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

const ColorButton = styled(Button)(() => ({
	color: 'white',
	backgroundColor: primaryColor,
	'&:hover': {
		backgroundColor: primaryColor,
	},
}))
