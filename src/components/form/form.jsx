import React from 'react';
import { useForm } from "react-hook-form";
import './form.css';

export default function Form() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);  

  console.log(errors);

  return (
    <section id='form'>
      <div className="form_area">
        <div className="make_space_even">

          <form onSubmit={handleSubmit(onSubmit)} className='floating_form'>

            <section className='txt_inputs'>
              <h1>Zapisz się do programu</h1>
              <div className="name">
                <input type="text" id='fName' {...register("firstName", { required: "To pole musi być wypełnione", minLength: {
                  value: 3,
                  message: 'To pole musi zawierać co najmniej 3 znaki.'
                }, maxLength: {
                  value: 16,
                  message: 'To pole może zawierać maksymalnie 16 znaków'
                } })} className="name_input" placeholder='Imię' />
                <p>{errors.firstName?.message}</p> 
                
                
                <input type="text" id='lName' {...register("lastName", { required: "To pole musi być wypełnione", minLength: {
                  value: 3,
                  message: 'To pole musi zawierać co najmniej 3 znaki.'
                }, maxLength: {
                  value: 16,
                  message: 'To pole może zawierać maksymalnie 16 znaków'
                } })} className="name_input" placeholder='Nazwisko' />     
                <p>{errors.lastName?.message}</p>           
              </div>

              <div className="email">
                <input type="email" id='email' {...register("email", { required: "To pole musi być wypełnione" })} placeholder='e-mail' />
                <p>{errors.email?.message}</p>   
              </div>

              <div className="phone">
                <input type="tel" id='number' {...register("number", {
                  required: "To pole musi być wypełnione", pattern: {
                  value: /\d{9}/,
                  message: 'Podaj poprawny numer telefonu.'
                } })} placeholder='Numer Telefonu' />
                <p>{errors.number?.message}</p> 
              </div>

              <div className="city">
                <input type="text" id='city' {...register("city", {
                  required: "To pole musi być wypełnione", minLength: {
                    value: 3,
                    message: 'To pole musi zawierać co najmniej 3 znaki.'
                  }, maxLength: {
                    value: 34,
                    message: 'To pole może zawierać maksymalnie 34 znaki'
                  }
                })} className="city" placeholder='Miasto' />
                <p>{errors.city?.message}</p>  
              </div>
            </section>

            <section>
              <label><h1>Jak oceniasz swoją sprawnośc fizyczną w skali od 1 do 10:</h1></label>
              <select {...register("rate", { required: true })} id="rate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </section>

            <section>
              <h1>Na jakim poziome plasuje się temperatura w twoim lokum:</h1>

              <div className="select_temperature">
                <label className="container">poniżej 17°C
                  <input type="radio" {...register("temp")} value="poniżej 17°C" />
                </label>

                <label className="container">17°C-20°C
                  <input type="radio" {...register("temp")} value="17°C-20°C" />
                </label>

                <label className="container">21°C-25°C
                  <input type="radio" {...register("temp")} value="21°C-25°C" />
                </label>

                <label className="container">powyżej 25°C
                  <input type="radio" {...register("temp", { required: "Zaznacz odpowiedź." })} value="powyżej 25°C"/>
                </label>

              </div>
              <p>{errors.temp?.message}</p>  
            </section>

            <section>
              <div className="submit">
                <button type='submit'>Wyślij zgłoszenie</button>
              </div>
            </section>

          </form>
        </div>
      </div>
    </section>
  );
}