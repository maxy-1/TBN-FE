import LogoBTN from "../Images/LogoTBNpng.png"

const About = () => {
    return (
      <>
      <div class="flex flex-row justify-center bg-white py-16" >
        <div class="flex justify-end w-4/12 m-0 p-0 pr-8">
          <div class="flex items-center w-8/12">
          <img
            src={LogoBTN}
            alt="gambar"
            className="w-full "
          />
          </div>
        </div>
        <div class="w-7/12 font-bold text-left font-bold mr-48" >
         <p style={{fontSize:"20px"}}><span style={{color:"#D9CA53"}}>TBN Indonesia</span> adalah sebuah organisasi nirlaba yang didirikan pada tahun 2022 dengan tujuan untuk mendorong kewirausahaan sosial di Indonesia. Organisasi ini dibentuk oleh sekelompok pengusaha dan pemimpin perusahaan yang ingin menggunakan keahlian dan sumber daya mereka untuk membantu mengatasi masalah sosial dan ekonomi di Indonesia.</p>
        </div>
      </div>
      </>
    );
  };
  
  export default About;