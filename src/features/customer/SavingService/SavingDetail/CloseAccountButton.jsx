
function CloseAccountButton({buttonText, onClick}) {
    return (
      <div className="text-center mt-8">
        <button className="self-start bg-[#95C475] text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-[#95C475] transition-colors duration-200 border border-[#95C475]" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    );
  };
  
  export default CloseAccountButton;