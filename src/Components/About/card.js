import React,{useState} from 'react'

const Card = ({img}) => {

const [isHovering, setIsHovering] = useState(false);


    const handleMouseOver = () => {
        setIsHovering(true);
        console.log("goat");
  };

  const handleMouseOut = () => {
    setIsHovering(false)
  };

  return (
     <div >
    <img  src={img}   onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} className="rounded-3xl "/>
    {isHovering &&  <h2>Hello world</h2>  }
    </div>
  )
}

export default Card;