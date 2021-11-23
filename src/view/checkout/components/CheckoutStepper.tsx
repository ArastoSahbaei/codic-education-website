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
	const [skipped, setSkipped] = React.useState(new Set())
	const steps = getSteps()

	const useStyles = makeStyles(() => ({
		root: {
			'& .MuiStepIcon-active': { color: primaryColor },
			'& .MuiStepIcon-completed': { color: primaryColor },
			'& .Mui-disabled .MuiStepIcon-root': { color: 'grey' },
            '&.MuiStepConnector-line': { bordercolor: primaryColor}
		}
	}))

	const c = useStyles()

	const isStepSkipped = (step: number) => {
		return skipped.has(step)
	}

	const handleNext = () => {
		let newSkipped = skipped
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values())
			newSkipped.delete(activeStep)
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1)
		setSkipped(newSkipped)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleSkip = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values())
			newSkipped.add(activeStep)
			return newSkipped
		})
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	return (
		<>
			<div>
				<Stepper className={c.root} alternativeLabel={true} activeStep={activeStep}>
					{steps.map((label, index) => {
						const stepProps: any = {}
						const labelProps: any = {}
						if (isStepSkipped(index)) {
							stepProps.completed = false
						}
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
