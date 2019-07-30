const validate = (values: any) => {
  const errors: any = {}
  if (!values.full_name) {
    errors.full_name = 'This field is required'
  }
  if (!values.email) {
    errors.email = 'This field is required'
  }
  else if (!values.email.match("@"))
    errors.email = 'Invalid email'

  if (values.phones) {
    const phonesErrors: any = []
    values.phones.forEach((phone: any, phoneIndex: number) => {
      const phoneErrors: any = {}
      if (!phone || !phone.label) {
        phoneErrors.label = 'This field is required'
        phonesErrors[phoneIndex] = phoneErrors
      }
      if (!phone || !phone.name) {
        phoneErrors.name = 'This field is required'
        phonesErrors[phoneIndex] = phoneErrors
      }
      if (!phone || !phone.number) {
        phoneErrors.number = 'This field is required'
        phonesErrors[phoneIndex] = phoneErrors
      }
      else if (phone.number.match(/[a-zA-Z!@#$%^&*(),.?":{}|<>]/g)) {
        phoneErrors.number = 'Invalid number'
        phonesErrors[phoneIndex] = phoneErrors
      }
    })
    if (phonesErrors.length) {
      errors.phones = phonesErrors
    }
  }
  return errors
}

export default validate