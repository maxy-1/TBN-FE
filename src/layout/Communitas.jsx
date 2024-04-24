import CardCommunitas from "../component/CardCommunitas";
import Communiti1 from "../Images/communiti1.png"
import Communiti2 from "../Images/communiti2.png"
import Communiti3 from "../Images/communiti3.png"
import Avatar1 from "../Images/Avatar 1.png"
import Avatar2 from "../Images/Avatar 2.png"
import Avatar3 from "../Images/Avatar 3.png"



const Communitas = () => {
    return (
      <>
      <div class="flex flex-row justify-between bg-white px-8 py-8">
        <CardCommunitas src={Communiti1} judul="TBN Indonesia mengembangkan keterampilan dan pengetahuan" desc="
        Dengarkan dan saksikan cerita sukses bagaimana TBN Indonesia mengembangkan keterampilan dan pengetahuan wirausaha Indonesia..." Avatar1={Avatar1} Avatar2={Avatar2} Avatar3={Avatar3}/>
        <CardCommunitas src={Communiti2} judul="TBN Indonesia membantu Indonesia pada sosial ekonomi" desc="Bergabung dengan TBN Asia telah memberi saya kesempatan untuk berkontribusi pada pembangunan sosial dan ekonomi." Avatar1={Avatar1} Avatar2={Avatar2} Avatar3={Avatar3} />
        <CardCommunitas src={Communiti3} judul="TBN Indonesia merupakan Mitra terbaik di Indonesia" desc="Bermitra dengan TBN Asia telah membantu kami mencapai tujuan kami dan memperluas jangkauan kami. Kami sangat menghargai hubungan kami dengan TBN Asia." Avatar1={Avatar1} Avatar2={Avatar2} Avatar3={Avatar3} />
        <div class="flex items-center w-6/12">
            <p style={{fontSize:"35px", color: "#D9CA53"}} class="text-right font-bold ">Komunitas Kami</p>
        </div>
      </div>
      </>
    );
  };
  
  export default Communitas;