import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (event) => {
    /* const name = event.target.name;
      const value = event.target.value; */
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const cleanFields = () => {
    setForm(initialState);
  };

  return { form, onChangeForm , cleanFields};
};

export default useForm;
