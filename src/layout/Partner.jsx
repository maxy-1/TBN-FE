import Logo1 from "../Images/Logo TDA onetime.png"
import Logo2 from "../Images/logo clariron.png"
import Logo3 from "../Images/logo go kampus.png"
import Logo4 from "../Images/logo greenhope.png"
import Logo5 from "../Images/logo indonesia care.png"
import Logo6 from "../Images/logo solar nusantara.png"
import Logo7 from "../Images/logo the trans.png"
import Logo8 from "../Images/logo yss.png"

const Partners = () => {
    return (
      <>
      <div class="bg-white" >
      <div class="font-bold text-center font-bold pt-16 " style={{fontSize: "30px", color:"#D9CA53"}} >
         <p>Partner Kami</p>
        </div>
        <div class="flex flex-row justify-center pb-16">
          <div class=" flex items-center m-0 p-0 ">
          <img
            src={Logo1}
            alt="gambar"
            className="w-12/12 h-6/6 object-cover max-w-[500px] max-h-[500px] "
          />
          </div>
          <div class=" flex items-center m-0 p-0 ">
          <img
            src={Logo2}
            alt="gambar"
            className="w-full h-3/6 object-cover max-w-[500px] max-h-[500px] p-4 pl-8 "
          />
          </div>
          <div class=" flex items-center m-0 p-0 ">
          <img
            src={Logo3}
            alt="gambar"
            className="w-9/12 h-3/6 object-cover max-w-[500px] max-h-[500px] p-4 "
          />
          </div>
          <div class=" flex items-center m-0 p-0 ">
          <img
            src={Logo4}
            alt="gambar"
            className="w-8/12 h-3/6 object-cover max-w-[500px] max-h-[500px] p-4 "
          />
          </div>
          <div class=" flex items-center m-0 p-0 ">
          <img
            src={Logo5}
            alt="gambar"
            className="w-8/12 h-3/6 object-cover max-w-[500px] max-h-[500px] p-4 "
          />
          </div>
          <div class=" flex items-center m-0 p-0 ">
          <img
            src={Logo6}
            alt="gambar"
            className="w-8/12 h-3/6 object-cover max-w-[500px] max-h-[500px] p-4 "
          />
          </div>
          <div class=" flex items-center m-0 p-0 ">
          <img
            src={Logo7}
            alt="gambar"
            className="w-8/12 h-3/6 object-cover max-w-[500px] max-h-[500px] p-4 "
          />
          </div>
          <div class=" flex items-center m-0 p-0 ">
          <img
            src={Logo8}
            alt="gambar"
            className="w-12/12 h-3/6 object-cover max-w-[500px] max-h-[500px] p-4 "
          />
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Partners;