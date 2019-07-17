const validate =( values:any) => {
    const errors:any= {}
    if (!values.full_name) {
      errors.first_name = 'Required'
    }
    if(!values.email){
        errors.email = 'Required'
    }
    if (!values.phones || !values.phones.length) {
      errors.phones = { _error: 'At least one phone number must be entered' }
    } else {
      const phonesErrors:any = []
      values.phones.forEach((phone:any, phoneIndex:number) => {
        const phoneErrors : any= {}
        if (!phone || !phone.label) {
          phoneErrors.label = 'Required'
          phonesErrors[phoneIndex] = phoneErrors
        }
        if (!phone || !phone.name) {
          phoneErrors.name = 'Required'
          phonesErrors[phoneIndex] = phoneErrors
        }
        if (!phone || !phone.number) {
            phoneErrors.number = 'Required'
            phonesErrors[phoneIndex] = phoneErrors
          }
      })
      if (phonesErrors.length) {
        errors.phones = phonesErrors
      }
    }
    console.log(errors)
    return errors
  }
  
  export default validate