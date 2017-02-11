import React, {PropTypes} from 'react'
import { Form } from 'semantic-ui-react'

const TextInput = ({name, label, onChange, placeholder, value, error, type="text"}) => {
  // let wrapperClass = 'form-group'
  // if (error && error.length > 0) {
  //   wrapperClass += " " + 'has-error'
  // }

  return (
    <Form.Field>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
    </Form.Field>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
}

export default TextInput
