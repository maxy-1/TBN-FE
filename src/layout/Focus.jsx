import FokusUtama1 from "../Images/Fokus Utama 1.png"
import FokusUtama2 from "../Images/Fokus Utama 2.png"
import FokusUtama3 from "../Images/Fokus Utama 3.png"
import CardFocus from "../component/CardFocus";

const Focus = () => {
    return (
      <>
      <div class="flex flex-col bg-white text-center" >
        <div class="font-bold text-center font-bold " style={{fontSize: "30px", color:"#D9CA53"}}>
            <p>Fokus Utama TBN Indonesia</p>
            <p class="text-gray-400 font-normal pt-2" style={{fontSize: "20px"}}>TBN Indonesia berfokus pada kemiskinan, pengangguran, dan kesenjangan sosial.</p>
        </div>
        <div class="flex flex-row justify-between items-center px-16 font-bold" style={{fontSize: "20px", color:"#D9CA53"}}>
            <CardFocus image={FokusUtama1} sizeImage="w-12/12 h-12/12 p-8 " caption="Mengembangkan Wirausaha Sosial"/>
            <CardFocus image={FokusUtama2} sizeImage="w-12/12 h-12/12 p-8 " caption="Menciptakan Ekosistem yang Mendukung"/>
            <CardFocus image={FokusUtama3} sizeImage="w-6/12 h-12/12 p-8 " caption="Mempromosikan Kewirausahaan Sosial"/>
        </div>
      </div>
      </>
    );
  };
  
  export default Focus;