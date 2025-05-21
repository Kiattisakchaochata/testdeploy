import * as Yup from "yup";

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .required("กรุณากรอกอีเมล"),
  password: Yup.string()
    .min(6, "รหัสผ่านต้องมากกว่า 6 ตัว")
    .required("กรุณากรอกรหัสผ่าน"),
  date: Yup.string().required("กรุณาระบุวันเกิด"),
  age: Yup.number().min(1, "อายุต้องมากกว่า 0").required("กรุณากรอกอายุ")
});

export default signupSchema;