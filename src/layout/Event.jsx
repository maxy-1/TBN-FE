import CardEvent from "../component/CardEvent";


const Event = () => {
    return (
      <>
      <div class="flex flex-col bg-white text-center py-16" >
        <div class="text-center" >
            <p class="font-bold text-center" style={{fontSize: "30px", color:"#D9CA53"}} >Acara TBN Indonesia</p>
            <p class="font-semibold text-center" >Acara TBN Indonesia</p>
        </div>
        <div class="flex flex-row justify-between items-center p-16 font-bold" style={{fontSize: "20px"}}>
           <CardEvent/>
           <CardEvent/>
           <CardEvent/>
        </div>
      </div>
      </>
    );
  };
  
  export default Event;