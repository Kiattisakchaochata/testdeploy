import { useState } from "react";
import schema from "../schema/signupSchema";
import { yupToFormErrors } from "../utils/yupToFormErrors";

const styles = {
  divInput: "flex flex-col gap-2",
  input: "border border-gray-300 rounded-lg p-2",
  error: "text-red-500 text-sm mt-1",
};

export default function SignupForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    date: "",
    age: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(form, { abortEarly: false });
      alert("Signup success!");
      setErrors({});
    } catch (err) {
      const errObj = yupToFormErrors(err);
      setErrors(errObj);
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <p className="text-2xl font-bold pb-6">Signup</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className={styles.divInput}>
          <label htmlFor="email">อีเมล</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.divInput}>
          <label htmlFor="password">รหัสผ่าน</label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>

        <div className={styles.divInput}>
          <label htmlFor="date">วันเกิด</label>
          <input
            className={styles.input}
            type="date"
            name="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          {errors.date && <p className={styles.error}>{errors.date}</p>}
        </div>

        <div className={styles.divInput}>
          <label htmlFor="age">อายุ</label>
          <input
            className={styles.input}
            type="number"
            name="age"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />
          {errors.age && <p className={styles.error}>{errors.age}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          สมัครสมาชิก
        </button>
      </form>
    </div>
  );
}
