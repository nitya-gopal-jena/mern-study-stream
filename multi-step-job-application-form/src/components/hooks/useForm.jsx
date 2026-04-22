// hooks/useForm.js
import { useState } from "react";

export default function useForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    personal: { name: "", email: "", phone: "", linkedin: "", github: "" },
    experience: [{ company: "", role: "", years: "" }],
    skills: []
  });

  const update = (section, value) => {
    setForm(prev => ({ ...prev, [section]: value }));
  };

  return { step, setStep, form, update };
}