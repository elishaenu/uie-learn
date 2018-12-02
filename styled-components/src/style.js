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

// const customStyles = {
//   control: (state) => ({  
//     '&:hover': { 
//       border: '1px solid #FFD77B'
//     },
//     'background': '#313440',
//     'border': state.isFocused ? '1px solid #FFD77B' : '1px solid #1B1C21',
//     'box-shadow': 'none',
//     'outline': 'none',
//     font
//   }),
//   input:  ({
//     color: '#fff',
//     font
//   }),
//   menu:  ({
//     background: '#313440',
//     marginTop: '2px',
//     marginBottom: '2px'
//   }),
//   option:  (state) =>  ({
//     'background': state.isSelected ? '#262831' : '#313440',
//     'color': '#fff',
//     '&:hover': {
//       background: '#262831'
//     },
//     font
//   }),
//   singleValue: ({
//     color: '#fff'
//   }),
//   multiValue:  ({
//     color: '#000'
//   }),
//   indicatorSeparator:  ({
//     'background-color': 'transparent'
//   }),
//   dropdownIndicator: (state) =>  ({
//     'color': state.isFocused ? '#FFD77B' : '#9EA1B4',
//     '&:hover': {
//       color: '#FFD77B'
//     }
//   })
// };

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

  const InputRefEnu=styled.input`
    padding:0.5em;
    margin:0.5em;
    color:palevioletred;
    background:papayawhip;
    border:none;
    border-radius:3px;
  `;
  

  // volantis ui
  //select
  const options = [
    { label: '---1e---', value: '1' },
    { label: '---2nu---', value: '2' }
  ];

  const SelectEnu = styled(Select)`
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
