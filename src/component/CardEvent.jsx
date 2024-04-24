import { Link } from "react-router-dom";


const CardEvent = (props) => {
    return (
      <>
      <div class="border-solid rounded-lg shadow-lg max-w-lg mx-4 mx-2" style={{borderColor:"#D9CA53", maxHeight:"510px"}}>
        <div class="flex flex-col justify-center my-8 mx-8">
            <div class="rounded-lg ">
                <img
                src={props.src}
                alt="gambar"
                className="w-80"
                /> 
            </div>
            <div class="text-left h-16 pt-4">
                <p style={{color:"#D9CA53"}}>{props.judul}</p>
            </div>
            <div class="text-left font-normal py-2 text-gray-400" style={{fontSize:"15px"}}>
                <p>{props.desc}</p>
            </div>
            <div class="text-left">
                <Link to="/#" style={{color:"#04549D", textDecoration: "none", fontSize:"17px"}}>Baca Selengkapnya</Link>
            </div>
        </div>
      </div>
        
      </>
    );
  };
  
  export default CardEvent;