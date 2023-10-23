import { useState } from "react"

export interface IForm{
  hex: string,
  rgb: string
}
    
export default function FormRGB() {
  const regexp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const[form,setForm]=useState<IForm>({
    hex: "",
    rgb: ""
    });
  
  let rgb_val = '';
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let {value} = e.target;
    let color_hex = regexp.test(value);

    if (value.length==7) 
    {
        if (color_hex) 
        {
            rgb_val = 'rgb('+parseInt(value.slice(1, 3), 16)+', '+parseInt(value.slice(3, 5), 16)+', '+parseInt(value.slice(5, 7), 16)+')'
            document.body.style.backgroundColor = value; 
        }
     else rgb_val = 'Ошибка!';
    }

    setForm(prevForm => ({...prevForm, hex: value, rgb: rgb_val}));
     
      }
  return (
    <form>
      <input name='hex' id='hex' value={form.hex} onChange={handleChange}/>
      <br />
      <input name='rgb' id='rgb' value={form.rgb} readOnly/>
    </form>
  )
}
