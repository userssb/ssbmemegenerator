import styled from 'styled-components'

export const Text = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: ${props => props.btmMargin};
`

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  height: ${props => props.height};
  flex-direction: ${props => props.direction};
  margin-bottom: 10px;
`
export const MemeGenCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: 100px;
  //   margin-left: 300px;
`
export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height};
  flex-direction: ${props => props.direction};
  margin-left: 60px;
  color: #7e858e;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  color: #35469c;
  margin-bottom: 16px;
  font-size: 32px;
  text-align: center;
`
export const CustomSelect = styled.select`
  width: 250px;
  height: 30px;
`

export const CustomInput = styled.input`
  width: 250px;
  height: 30px;
`
export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  height: 30px;
  align-self: flex-start;
  border: 2px solid #0b69ff;
  width: 100px;
  border-radius: 4px;
  cursor: pointer;
`
