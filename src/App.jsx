import "./App.css";

function App() {
  return (
    <div className=" w-screen flex items-center justify-center p-2">
      <div className="flex flex-col gap-10 lg:gap-10 max-w-3xl ">
        <div className="">
          <h1 className="underline text-[1.6rem] font-['Space_Mono'] font-[700]">
            FONT-PAIR
          </h1>
        </div>
        <div className=" flex flex-col gap-8 lg:gap-6">
          <div className=" text-center">
            <div className=" p-4 py-2 bg-[#2F2F2F] text-white text-[1rem] w-max  font-['Space_Mono'] italic">
              <p>cormorant garamond</p>
            </div>
            <input
              value={"Font pairing made simple"}
              className="bg-[#F1F5F9] p-2 lg:p-4 w-full font-['Cormorant_Garamond'] text-[2rem]"
            />
          </div>
          <div className="">
            <div className=" p-4 py-2 bg-[#2F2F2F] text-white text-[1rem] w-max font-['Space_Mono'] italic">
              <p>proza libre</p>
            </div>
            <div className="text-left flex flex-col gap-6 p-3 bg-[#F1F5F9] lg:p-6 font-['Proza_Libre']">
              <p>
                Click (Generate) to create a new font pairing, (Lock) to lock
                fonts that you want to keep, and (Edit) to choose a font
                manually. The text is editable, try replacing it with your
                company name or other copy.
              </p>
              <p>
                The goal of font pairing is to select fonts that share an
                overarching theme yet have a pleasing contrast. Which fonts work
                together is largely a matter of intuition, but we approach this
                problem with a neural net. See Github for more technical
                details.
              </p>
              <p>
                The goal of font pairing is to select fonts that share an
                overarching theme yet have a pleasing contrast. Which fonts work
                together is largely a matter of intuition, but we approach this
                problem with a neural net. See Github for more technical
                details.
              </p>
            </div>
          </div>
          <button className="w-full p-4 bg-[#2F2F2F] text-white text-[1rem] font-['Space_Mono']">
            generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
