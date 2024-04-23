import CardCommunitas from "../component/CardCommunitas";


const Communitas = () => {
    return (
      <>
      <div class="flex flex-row justify-between bg-white p-8">
        <CardCommunitas/>
        <div class="w-2/12">
            <p style={{fontSize:"40px", color: "#D9CA53"}} class="text-right font-bold ">Komunitas Kami</p>
        </div>
      </div>
      </>
    );
  };
  
  export default Communitas;