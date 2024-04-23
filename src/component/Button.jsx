const Button = (props) => {
    const buttonStyle = {
        border: props.borderButton,
        backgroundColor: props.backgroundColorButton,
      };
    return(
        <>
        <div >
        <button type="button" style={buttonStyle} class="text-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-semibold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{props.name}</button>
        </div>
        </>
    )
}

export default Button;