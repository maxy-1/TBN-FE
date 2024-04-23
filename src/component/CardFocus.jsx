

const CardFocus = (props) => {
    return (
      <>
        <div>
        <div>
        <img
            src={props.image}
            alt="gambar"
            className={props.sizeImage}
          />
        </div>
        <div>
            <p>{props.caption}</p>
        </div>
        </div>
      </>
    );
  };
  
  export default CardFocus;