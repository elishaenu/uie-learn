import React, { Component } from 'react';
import './App.css';
import styled, {keyframes,createGlobalStyle,css} from 'styled-components';
import Select from 'react-select';
import EnuButton from './EnuButton';
import SelectEnu from './SelectEnu';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "blue" : "red"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: inline-block;
  text-decoration:none;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color:tomato;
`;

const Link = ({ className, children }) => (
  <span className={className}>
    {children}
  </span>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  font-size:10px;
`;

const Input = styled.input.attrs({
  type:"number"
})`
  name: 'width';
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "red"};
  background: tomato;
  border: none;
  border-radius: 3px;
`;

const Paragraph = styled.p`
  padding:10px;
  background: grey;
  display:inline-block;

  :after{
    content:'px';
  }
  :hover{
    background:white;
  }
`;

const BtnIncrease = styled.button`
  border : 2px solid yellow;
  border-radius:10px;
  width:25px;
  height : 25px;
  background:lightgreen;
  font-weight : bold;
`;

const BtnDecrease = styled(BtnIncrease)`
  background:red;
`;

const font = '400 14px \'Roboto\', sans-serif';

const customStyles = {
  control :({  
    '&:hover': { 
      border: '1px solid #FFD77B'
    },
    'background': '#313440', 
    'box-shadow': 'none',
    'outline': 'none',
    font
  }),
  input:  ({
    color: '#fff',
    font
  }),
  menu:  ({
    background: '#313440',
    marginTop: '2px',
    marginBottom: '2px'
  }),
  option:  ({ 
    'color': '#fff',
    '&:hover': {
      background: '#262831'
    },
    font
  }),
  singleValue: ({
    color: '#fff'
  }),
  multiValue:  ({
    color: '#000'
  }),
  indicatorSeparator:  ({
    'background-color': 'transparent'
  }),
  dropdownIndicator:  ({ 
    '&:hover': {
      color: '#FFD77B'
    }
  })
};

const ReversedButton = props => <button {...props} children={props.children.split('').reverse()} />

const Test = styled.div`
  color: ${props => props.cobaah || "red"};
  text-decoration:underline;
`;
//bisa juga dikasih .ubah{color:red} , lalu HTML ditulis :
/* <Test>
  <label>Halo</label>
  <label className="ubah">Halo</label>
</Test> */

  const InputNew = styled.input.attrs({
    type:"password"
  })`
    color:palevioletred;
    font-size:1em;
    border-radius:3px;
    border:2px solid palevioletred;
    margin:${props => props.marginku};
    padding:${props => props.paddingku};
  `;

  const rotate=keyframes`
    from{
      transform:rotate(0deg);
    }
    to{
      transform:rotate(360deg);
    }
  `;
  const Rotate=styled.div`
    display:inline-block;
    animation:${rotate} 2s linear infinite;
    font-size:2em;
  `;

  const BtnThemed = styled.button`
    font-size:1em;
    margin:1em;
    padding:0.25em 1em;
    border-radius:3px;

    color:${props=>props.theme.main};
    border:2px solid ${props=>props.theme.main};
  `;

  BtnThemed.defaultProps={
    theme:{
      main:"palevioletred"
    }
  }

  const theme = {
    main : "mediumseagreen"
  };

  const mainColor = "purple";

  const borderku = css`
    ${props => {
      if(props.showBorder){
        return `
          border: 5px solid ${mainColor};
          border-radius : 8px;
        `;
      }

    }}
  `;

  const InputRefEnu=styled.input`
    padding:0.5em;
    margin:0.5em;
    color:palevioletred;
    background:papayawhip;
    border:none;
    border-radius:3px;
    ${borderku}
  `;
  

  // volantis ui
  //select
  const options = [
    { label: '---1e---', value: '1' },
    { label: '---2nu---', value: '2' }
  ];

  const SelectEnuX = styled(Select)`
    border-radius:5px;
    background:#262831;
    background-color:red;
    width:200px;
    :focus{
      text-shadow:black 1px 1px 1px;
    }
    :hover{
      border:5px solid #FFD77B;
    }
  `;

  const GlobalStyle = createGlobalStyle`
    body{
      color:lightgreen;
    }
  `

class App extends Component {
  constructor(props){
    super(props);
    this.inputRefs = React.createRef();
  }

  state = {count:0, selectedOption:null}

  handleChange = (selectedOption) => {
    this.setState({selectedOption});
  }

  increment = () => this.setState({ count:this.state.count +1})
  decrement = () => this.setState({ count:this.state.count -1})

  render() {
    const {selectedOption} = this.state;
    return (
        <Wrapper>
          <Title>
            Hello World!
          </Title>
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <TomatoButton as="a" href="https://google.com"> Tomato Button</TomatoButton>
          <Button as={ReversedButton}>Custom Button w/ Normal Button styles</Button>
          <Link>Unstyled Link</Link><br/>
          <StyledLink>Styled</StyledLink>
          <div>
            <Input placeholder="input number"/>
            <Input defaultValue="@geelen" inputColor="rebeccapurple" />
          </div>

          <BtnIncrease onClick={this.increment}>+</BtnIncrease>
          <Paragraph>{this.state.count}</Paragraph>
          <BtnDecrease onClick={this.decrement}>-</BtnDecrease>

          <Test></Test>
          <Test cobaah="black">Limanu</Test>

          <div>
            <InputNew placeholder="A small text input" marginku="10px"/>
            <InputNew placeholder="A bigger text input" marginku="20px" paddingku="2em"/>
          </div>

          <Rotate>&lt; 💅 &gt;</Rotate>
          
          <InputRefEnu 
            ref={this.inputRefs} 
            placeholder="Hover to focus" 
            showBorder='true'
            onMouseEnter={()=>{
              this.inputRefs.current.focus()
            }}
          />

          {/* NOT WORKING */}
          {/* <BtnThemed>Normal</BtnThemed>
          <ThemeProvider theme={theme}>
            <BtnThemed>Themed</BtnThemed>
          </ThemeProvider> */}

          {/* NOT WORKING */}
          {/* select */}
          <div id="select">
            <label htmlFor="Multiple Number">MULTIPLE NUMBER</label>
            <div>{this.state.value}</div>
            {/* <SelectEnu value={this.state.value} onChange={this.handleChange} options={options} styles={customStyles}> */}
            {/* <SelectEnu value={this.state.value} onChange={this.handleChange} options={options}> */}
            {/* </SelectEnu> */}
            <SelectEnuX value={this.state.value} onChange={this.handleChange} options={options}>
            {/* <SelectEnu value={this.state.value} onChange={this.handleChange} options={options}> */}
            </SelectEnuX>
          </div>

          <GlobalStyle/>

          {/* <EnuButton></EnuButton> */}
          <hr></hr>
        </Wrapper>
    );
  }
}

export default App;
