import CommentIcon from "../Images/Comment Icon.png"
import PeopleIcon from "../Images/People Icon.png"
const CardCommunitas = (props) => {
  return (
    <div className="relative w-9/12 px-2">
      <div className="flex items-center justify-center">
        <img
          src={props.src}
          alt="gambar"
          className="w-full h-auto object-cover"
        />
        <div class="flex flex-col">
        <div className="absolute inset-x-0 bottom-6 z-20 bg-white text-black p-2 mx-6 text-center rounded-lg max-h-56">
            <p className="bg-white p-2 font-bold" style={{fontSize:"15px", color:"#CAD32C"}}>{props.judul}</p>
            <p className="bg-white text-gray-400 p-2 h-16 " style={{fontSize:"10px"}}>{props.desc}</p>
            <div class="flex flex-row justify-between mx-4">
            <div>
            <img
                src={CommentIcon}
                alt="gambar"
                className="w-4 h-auto object-cover"
            />
            </div>
            <div>
            <img
                src={PeopleIcon}
                alt="gambar"
                 className="w-4 h-auto object-cover"
            />
            </div>
            
            <div class="flex flex-row w-16">
            <img
                src={props.Avatar1}
                alt="gambar"
                className="w-4 h-4 object-cover z-0"
            />
            <img
                src={props.Avatar2}
                alt="gambar"
                className="w-4 h-4 object-cover z-0"
            />
            <img
                src={props.Avatar3}
                alt="gambar"
                className="w-4 h-4 object-cover z-20"
            />
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardCommunitas;
