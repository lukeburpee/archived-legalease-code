import React from 'react';
import Radios from './../../../formelements/components/radios';
import Select from './../../../formelements/components/select';

export default class ValueSelector extends React.Component {
  static get propTypes() {
    return {
      value: React.PropTypes.string,
      type: React.PropTypes.string,
      options: React.PropTypes.array.isRequired,
      className: React.PropTypes.string,
      handleOnChange: React.PropTypes.func
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {type, value, options, className, handleOnChange} = this.props;

    return (
    <div>
      {(type === 'radiolist')?
      <Radios value={value} onChange={e=>handleOnChange(e.target.value)} columns={2} options={options}/>:
      <Select value={value} inline={true} onChange={(e,i,v)=>handleOnChange({v})} options={options}/>
      }
    </div>
    );
  }
}
