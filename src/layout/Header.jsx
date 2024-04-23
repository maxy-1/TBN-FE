import Navbar from "../component/Navbar";

const Header = () => {
    return (
      <>
        <div >
          <Navbar />
        </div>
        <div class="h-96 pl-16 p-4 text-white font-bold mt-16" style={{fontSize: "30px", marginRight:"50%"}}>
            <p>100 kota di Indonesia berakselerasi menuju kemanjuan sosial pada tahun 2040</p>
        </div>
      </>
    );
  };
  
  export default Header;