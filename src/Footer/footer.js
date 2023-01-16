import React, { useEffect, useRef } from "react";
import { footerLinks, social } from "./data";
import Logo from "../Assets/Logo.png";
import SubLink from "./subLink";

const Footer = () => {
  // const toTopRef = useRef(null);
  // useEffect(() => {
  //   toTopRef.current.addEventListener("click", () => {
  //     window.scrollTo({ top: 0 });
  //   });
  // }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center justify-center py-20 mx-9">
    <div >
        <h2 className='font-bold text-4xl flex  '><img src={Logo} />Interno</h2>
          <p className=' leading-[1.3rem] my-5 text-[16px] text-[#4D5053]'>
            It is a long established fact that a reader<br></br> will be distracted lookings
          </p>
          <div className="grid grid-cols-4 items-center justify-center gap-4  ">
             {social.map(({ img, url }, i ) => {
             return (
                      <div key={i} >
                        <a href={url} className="flex gap-4 ">
                          <img src={img} className='flex ' alt='social-icon' />
                        </a>
                      </div>
                    );
          })}
          </div>

    </div>

          <div className="grid grid-cols-3 ">
      {footerLinks.map(({ title, subLinks },  i) => {

        return (
          <div key={i} className="">
          <div className="  ">
                <h2 className='font-medium text-sm  text-black text-[22px] mt-6 '>
                  {title}
                </h2>

                <div className="text-[16px] text-[#4D5053]  ">
                {subLinks?.map((item, i) => {
                  return <SubLink  key={i} {...item} />;
                })}
          </div>

        </div>
      </div>
        )
      })}
      </div>
    </div>
  )
};

export default Footer;
