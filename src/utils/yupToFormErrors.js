export function yupToFormErrors(err) {
  const errObj = {};
  if (err?.inner) {
    err.inner.forEach((e) => {
      errObj[e.path] = e.message;
    });
  }
  return errObj;
}
