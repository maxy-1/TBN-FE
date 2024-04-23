import LogoBTN from "../Images/LogoTBNpng.png";

const CardCommunitas = () => {
  return (
    <div className="relative w-2/12">
      <div className="flex items-center justify-center">
        <img
          src={LogoBTN}
          alt="gambar"
          className="w-full h-auto object-cover max-w-[500px] max-h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="bg-black text-white z-20 p-2">Teks di tengah</p>
        </div>
      </div>
    </div>
  );
};

export default CardCommunitas;
