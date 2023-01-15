import React, { useEffect, useRef } from "react";
import { footerLinks } from "./data";
import Logo from "../Assets/Logo.png";
import SubLink from "./subLink";

const Footer = () => {
  const toTopRef = useRef(null);
  useEffect(() => {
    toTopRef.current.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    });
  }, []);

  return (
    <div>
      {footerLinks.map(({ title, social, subLinks },  i) => {
        return (
          <div key={i} className="grid md:mx-[15rem] my-[5rem] mx-[1rem] grid-cols-2  ">
        <div className='lg:w-[20%]'>
          <h2 className='font-bold text-4xl'><img src={Logo} />Interno</h2>
          <p className='text-xs font-thin leading-[1.3rem] my-5 text-blue-200'>
            It is a long established fact that a reader will be distracted lookings
          </p>
          <div className='flex gap-2'>
                  {social?.map((item, i) => {
                    return (
                      <div key={i}>
                        <a href={item.url}>
                          <img
                            src={item.img}
                            className='w-5'
                            alt='socail-icon'
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
        </div>
        <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-4">
           <h2 className='font-medium text-sm mb:4 lg:mb-10 text-white'>
                  {title}
                </h2>
                {subLinks.map((item, i) => {
                  return <SubLink  key={i} {...item} />;
                })}

        </div>
          </div>
        )
      })}
    </div>
  )
};

export default Footer;
