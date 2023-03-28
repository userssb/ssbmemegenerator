import {Component} from 'react'
import {
  MemeGenCont,
  Container,
  FormContainer,
  Heading,
  CustomSelect,
  CustomInput,
  CustomButton,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    backgroundImageUrl: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeId: fontSizesOptionsList[0].optionId,
    backgroundImage: '',
    topText: '',
    bottomText: '',
    activeFontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({backgroundImageUrl: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeActiveFontSizeId = event => {
    this.setState({activeFontSizeId: event.target.value})
  }

  generateMeme = event => {
    event.preventDefault()
    const {
      topTextInput,
      backgroundImageUrl,
      bottomTextInput,
      activeFontSizeId,
    } = this.state

    this.setState({
      topText: topTextInput,
      backgroundImage: backgroundImageUrl,
      bottomText: bottomTextInput,
      activeFontSize: activeFontSizeId,
    })
    // return (
    //   <MemeGenCont
    //     backgroundImage={backgroundImage}
    //     height="500px"
    //     width="400px"
    //   >
    //     <Text fontSize={activeFontSize}>{topText}</Text>
    //     <Text fontSize={activeFontSize}>{bottomText}</Text>
    //   </MemeGenCont>
    // )
  }

  renderMemeGenerator = () => {
    const {
      backgroundImageUrl,
      topTextInput,
      bottomTextInput,
      activeFontSizeId,
    } = this.state

    return (
      <FormContainer direction="column" onSubmit={this.generateMeme}>
        <Heading>Meme Generator</Heading>
        <Container direction="column" align="flex-start">
          <label htmlFor="imgURL">Image URL</label>
          <CustomInput
            type="text"
            onChange={this.onChangeImageUrl}
            id="imgURL"
            placeholder="Enter the Image URL"
            value={backgroundImageUrl}
          />
        </Container>
        <Container direction="column">
          <label htmlFor="top">Top Text</label>
          <CustomInput
            type="text"
            onChange={this.onChangeTopTextInput}
            id="top"
            placeholder="Enter the Top Text"
            value={topTextInput}
          />
        </Container>
        <Container direction="column">
          <label htmlFor="bottomIp">Bottom Text</label>
          <CustomInput
            type="text"
            id="bottomIp"
            value={bottomTextInput}
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomTextInput}
          />
        </Container>
        <Container direction="column">
          <label htmlFor="size">Font Size</label>
          <CustomSelect
            id="size"
            onChange={this.onChangeActiveFontSizeId}
            value={activeFontSizeId}
          >
            {fontSizesOptionsList.map(eachItem => (
              <option value={eachItem.optionId} key={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </CustomSelect>
        </Container>
        <Container>
          <CustomButton type="submit">Generate</CustomButton>
        </Container>
      </FormContainer>
    )
  }

  renderMeme = () => {
    const {backgroundImage, activeFontSize, topText, bottomText} = this.state
    return (
      <MemeGenCont
        data-testid="meme"
        backgroundImage={backgroundImage}
        height="400px"
        width="600px"
      >
        <Text fontSize={activeFontSize}>{topText}</Text>
        <Text fontSize={activeFontSize} btmMargin="20px">
          {bottomText}
        </Text>
      </MemeGenCont>
    )
  }

  render() {
    return (
      <Container height="100vh" justify="space-between" align="space-between">
        {this.renderMemeGenerator()}
        {this.renderMeme()}
      </Container>
    )
  }
}
export default MemeGenerator
