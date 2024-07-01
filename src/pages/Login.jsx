import React, { useState, useEffect } from 'react';
import cewe from '/assets/Asset_cewe.svg';
import AOS from 'aos';
import cowo from '/assets/Asset_cowo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    AOS.init({});
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };
  return (
    <div className="bg-login h-screen flex items-center justify-center bg-no-repeat w-full bg-cover">
      <div className="relative w-[700px] h-[700px] rounded-2xl bg-transparent">
        <div className="absolute w-[700px] h-[700px] -z-0 rounded-2xl bg-transparent">
          <img src={cewe} alt="svg ku" data-aos="fade-up-right" className="absolute bottom-0 -right-80 translate-x-11" />
          <img src={cowo} alt="svg ku" className="absolute bottom-0 -left-80 -translate-x-3" />
        </div>
        <div className="relative form-wrapper w-[700px] h-[700px] flex flex-col justify-start items-center rounded-2xl bg-white">
          <h1 className="text-4xl font-semibold text-slate-700 translate-x-5 mt-24">Selamat Datang!👋</h1>
          <p className="font-semibold text-slate-700 mt-3">Masuk dan mulai langkahmu.</p>
          <form action="" onSubmit={handleSubmit} className="mt-24 flex flex-col w-[80%]">
            <div className="input-box mx-7">
              <p className="font-poppins font-medium text-slate-700 text-[18px] mb-1">Email</p>
              <input className="bg-[#f6f6f6] border-lg border-[#efefef] outline-none rounded-lg px-5 h-14 w-full" placeholder="Masukkan email anda" type="email" />
            </div>
            <div className="input-box mx-7 mt-9 relative">
              <p className="font-poppins font-medium text-slate-700 text-[18px] mb-1">Password</p>
              <input className="bg-[#f6f6f6] border-lg border-[#efefef] outline-none rounded-lg px-5 h-14 w-full" placeholder="Masukkan password anda" type={showPassword ? 'text' : 'password'} />
              <button type="button" className="absolute translate-y-[75%] right-5" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className=" text-xl text-[#5A6A85] " />
              </button>
            </div>
            <button className="bg-gradient-to-r from-[#B1C5FF] transition ease-in-out duration-200 hover:scale-110 to-[#2D8EFF] w-[90%] mx-auto h-14 rounded-full mt-8">
              <h1 className="text-white text-lg">Masuk</h1>
            </button>
          </form>
          <div className="login-footer font-semibold mt-9">
            <p className="text-slate-700">
              Developed by{' '}
              <span className="text-[#2D8EFF]">
                <a href="https://www.instagram.com/raphael.eskalaber/?utm_source=ig_web_button_share_sheet">Raphael</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
