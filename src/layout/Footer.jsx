import LogoBTN from "../Images/logo-tbnindonesia.jpg";
import Facebook from "../Images/FB.png";
import IG from "../Images/IG.png";
import X from "../Images/X.png";
import Linkedin from "../Images/Linkedin.png";

const Footer = () => {
  return (
    <>
      <div className="bg-white pt-16">
        <div className="flex flex-row text-white h-32 mx-16 p-8 rounded-t-3xl" style={{ backgroundColor: "#04549D" }}>
          <div className="w-9/12">
            <div className="flex items-center p-4 bg-white w-32 rounded">
              <img
                src={LogoBTN}
                alt="gambar"
                className="w-full h-auto"
              />
            </div>
            <p className="pt-4 font-bold">Bersama TBN Indonesia, Kewirausahaan Sosial Merajut Negeri!</p>
          </div>
          <div className="flex flex-row w-7/12 justify-left">
            <div className="flex flex-col w-6/12">
              <p class="font-bold pb-3">Information</p>
              <p class="pb-3">Hubungi Kami</p>
              <p class="pb-3">Komunitas Kami</p>
              <p>Acara Kami</p>
            </div>
            <div className="flex flex-col pl-16 w-6/12">
              <p class="font-bold pb-3">Sosial Media</p>
              <div className="flex flex-row items-center w-4 rounded">
                <img
                  src={Facebook}
                  alt="gambar"
                  className="w-8 h-8 pr-4"
                />
                <img
                  src={IG}
                  alt="gambar"
                  className="w-6 h-6 pr-4"
                />
                <img
                  src={X}
                  alt="gambar"
                  className="w-6 h-6 pr-4"
                />
                <img
                  src={Linkedin}
                  alt="gambar"
                  className="w-8 h-8 pr-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
