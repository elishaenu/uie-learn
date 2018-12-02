import * as React from 'react';
import ReactSelect from 'react-select'; 
 

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
class SelectEnu extends React.Component {
  constructor(props){
    super(props); 
  }

  state = {isSelected:false, isFocused:false}

  render() {
    return (
      <ReactSelect
        options={this.props.options}
        onChange={this.props.onChange}
        value={this.props.value}
        defaultValue={this.props.defaultValue}
        instanceId={this.props.name}
        styles={customStyles}
        isDisabled={this.props.isDisabled}
        isMulti={this.props.isMulti}
        isSearchable={this.props.isSearchable}
        isClearable={this.props.isClearable}
        backspaceRemovesValue={this.props.backspaceRemovesValue}
        placeholder={this.props.placeholder}
        className={this.props.className}
      ></ReactSelect>
    );
  }
}
 
SelectEnu.defaultProps = {
  className: '',
  placeholder: 'select...',
  isDisabled: false,
  isMulti: false,
  isSearchable: false,
  isClearable: false,
  backspaceRemovesValue: false
};
export default SelectEnu;
