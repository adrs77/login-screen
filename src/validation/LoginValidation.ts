import * as Yup from 'yup';

export const getLoginValidationSchema = () => {
    return Yup.object().shape({
        email: Yup.string()
            .email("Email must be proper format")
            .required("Email is required")
            .max(36, "Email is too long"),
        password: Yup.string()
            .min(8, "Password must be 8 letters")
            .required("Password is required")
            .max(36, "Password is too long")
            .test(checkIfProperPassword)
    })
}

export const checkIfProperPassword = {
    name: "isProperPass",
    message: "Password must must contain at least one digit and uppercase letter",
    test: (value: string) => {
       return /\d/.test(value) && /[A-Z]/.test(value)
      },
  };
  