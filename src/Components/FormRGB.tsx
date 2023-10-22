import { useState } from "react"

export interface IForm{
  hex: string,
  rgb: string
}
    
export default function FormRGB() {
  const regexp = /^[#][A,B,C,D,E,F,a,b,c,d,e,f,\d]{6}/g;

  const[form,setForm]=useState<IForm>({
    hex: "",
    rgb: ""
    });
  
  let rgb_val = '';
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    console.log(value);
    console.log(regexp.test(value));
    regexp.test(value)?rgb_val = 'rgb()':rgb_val = 'Ошибка!';
    console.log(rgb_val);
    setForm(prevForm => ({...prevForm, hex: value, rgb: rgb_val}));
      //setForm(prevForm => ({...prevForm, [name]: value}))
      
      }
  return (
    <form>
      <input name='hex' id='hex' value={form.hex} onChange={handleChange}/>
      <input name='rgb' id='rgb' value={form.rgb}/>
    </form>
  )
}
