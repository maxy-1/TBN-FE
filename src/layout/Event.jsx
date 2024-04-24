import CardEvent from "../component/CardEvent";
import FotoEvent1 from "../Images/Lokakarya Wirausaha.png"
import FotoEvent2 from "../Images/Forum Investasi Wirausaha Sosial.png" 
import FotoEvent3 from "../Images/Konferensi Wirausaha Sosial Nasional.png"
import FotoEvent4 from "../Images/Penggalangan Dana.png"
import FotoEvent5 from "../Images/Penghijauan Lingkungan.png" 
import FotoEvent6 from "../Images/donasi sosial.png"


const Event = () => {
    return (
      <>
      <div class="flex flex-col bg-white text-center py-16" >
        <div class="text-center" >
            <p class="font-bold text-center" style={{fontSize: "30px", color:"#D9CA53"}} >Acara TBN Indonesia</p>
            <p class="font-normal text-center text-gray-400 mx-48 pt-4" style={{fontSize: "20px"}} >TBN Indonesia percaya bahwa kewirausahaan sosial dapat memainkan peran penting dalam mengatasi berbagai masalah di Indonesia, seperti kemiskinan, pengangguran dan kesenjangan sosial</p>
        </div>
        <div>
          <div class="flex flex-row justify-between items-center pb-4 px-16 pt-16 font-bold" style={{fontSize: "20px"}}>
            <CardEvent src={FotoEvent1} judul="Lokakarya Wirausaha Sosial" desc="Lokakarya dua hari yang dirancang untuk membekali wirausaha sosial dengan pengetahuan dan keterampilan yang mereka butuhkan ..."/>
            <CardEvent src={FotoEvent2} judul="Forum Investasi Wirausaha Sosial" desc="Acara satu hari yang mempertemukan wirausaha sosial dengan investor potensial untuk mendapatkan pendanaan untuk bisnis mereka"/>
            <CardEvent src={FotoEvent3} judul="Konferensi Wirausaha Sosial Nasional" desc="Konferensi tiga hari yang membahas tren terbaru dalam wirausaha sosial, menampilkan para pembicara terkemuka, dan menyediakan....."/>
          </div>
          <div class="flex flex-row justify-between items-center pt-4 px-16 pb-16 font-bold" style={{fontSize: "20px"}}>
            <CardEvent src={FotoEvent4} judul="Penghijauan Lingkungan" desc="Pertemuan Lingkungan adalah acara yang dirancang untuk membawa bersama komunitas yang peduli dengan isu-isu lingkungan..."/>
            <CardEvent src={FotoEvent5} judul="Penggalangan Dana" desc="Acara Penggalangan Dana adalah sebuah kegiatan yang bertujuan untuk mengumpulkan dana dari berbagai pihak untuk mendukung suatu tujuan..."/>
            <CardEvent src={FotoEvent6} judul="Donasi Sosial" desc="Acara Donasi Sosial merupakan sebuah kegiatan yang bertujuan untuk menggalang dana atau sumbangan dari masyarakat ....
"/>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Event;