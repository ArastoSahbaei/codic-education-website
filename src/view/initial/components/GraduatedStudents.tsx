import { useRef } from 'react'
import { useOnScreen } from 'hooks/useOnScreen'
import CountUp from 'react-countup'
import student from 'shared/images/student.svg'
import styled from 'styled-components'

export const GraduatedStudents = () => {
   const ref: any = useRef()
   const isVisible = useOnScreen(ref)

   const displayCountUp = () => {
      return isVisible &&
         <CountUp
            style={{ fontSize: 81 }}
            start={0}
            end={2689}
            duration={2}
            onEnd={() => console.log('Ended! 👏')}
            onStart={() => console.log('Started! 💨')}
         />
   }


   return (
      <Wrapper>
         <Image src={student} alt={''} />
         <CounterPlacement ref={ref}>
            {displayCountUp()}
         </CounterPlacement>
         <Paragraph>examinerande studenter</Paragraph>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: grid;
	grid-template-columns: repeat(12, 1fr);
   background-color: #f5f5f5;
   width: 100%;
`

const Image = styled.img`
   width: 250px;
   grid-column: 1/13;
   justify-self: center;
`

const CounterPlacement = styled.div`
   grid-column: 1/13;
   justify-self: center;
`

const Paragraph = styled.span`
   grid-column: 1/13;
   justify-self: center;
`