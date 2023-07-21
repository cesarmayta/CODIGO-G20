export default function fromFormDataToJson(formData) {
  const arrayFormData = [...formData.entries()];
  const body = {};
  arrayFormData.forEach(([key, value]) => Reflect.set(body, key, value));
  return body;
}
