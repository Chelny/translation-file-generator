const validators = {
  patterns: (inputName) => {
    if (inputName === 'file') return /^[^\s]+$/
    if (inputName === 'filename') return /^(\w|-|(\.(?!\.+))?)*\{lang\}(\w|-|(\.(?!\.+))?)*$/
    if (inputName === 'mapColumn0') return /^\d+$/
    if (inputName.indexOf('mapColumn') !== -1) return /.*/
  },
  validate: (props) => {
    const inputName = props.name
    const inputValue = props.value
    const inputRequired = props.required
    const pattern = validators.patterns(inputName)
    let valid = true

    if (inputRequired) {
      valid = pattern.test(inputValue)
    } else {
      if (inputValue.length > 0) {
        valid = pattern.test(inputValue)
      }
    }

    // Set error class for invalid inputs
    !valid ? props.classList.add('validation-error') : props.classList.remove('validation-error')

    return valid
  }
}

export default validators
