import React from "react";
import { Link } from "react-router-dom";


const SubLink = ({ title, url }) => {
  if (url.startsWith("/")) {
    return (
      <Link className='block text-xs my-6 text-[#4D5053] ' to={url}>
        {title}
      </Link>
    );
  }
  return (
    <a className='block text-xs text-black my-6 ' href={url}>
      {title}
    </a>
  );
};

export default SubLink;
