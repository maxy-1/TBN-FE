import { Link } from "react-router-dom";
import Coba from "../Images/Fokus Utama 1.png"
const CardEvent = (props) => {
    return (
      <>
      <div class="border-solid rounded-lg shadow-lg h-auto max-w-96" style={{borderColor:"#D9CA53"}}>
        <div class="m-4">
            <div>
                <img
                src={Coba}
                alt="gambar"
                className={props.sizeImage}
                /> 
            </div>
            <div class="text-left">
                <p style={{color:"#D9CA53"}}>Penghijauan Lingkungan</p>
            </div>
            <div class="text-left">
                <p>ffPenghijauan LingkunganPenghijauan LingkunganPenghijauan LingkunganPenghijauan LingkunganPenghijauan LingkunganPenghijauan Lingkungan</p>
            </div>
            <div class="text-left">
                <Link to="/#">jsss</Link>
            </div>
        </div>
      </div>
        
      </>
    );
  };
  
  export default CardEvent;