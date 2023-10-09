import "./App.css";

function App() {
  return (
    <div className=" w-screen flex items-center justify-center p-2 bg-[#F8F8F8]">
      <div className="flex flex-col gap-10 lg:gap-10 max-w-xl ">
        <div className="flex items-center justify-between py-4">
          <h1 className="underline text-3xl lg:text-5xl font-['Space_Mono'] font-[700]">
            FONT-PAIR
          </h1>
          <div className=" flex items-center pr-4">
            <div className="w-10 h-10 rounded-full bg-[#2F2F2F] relative left-9"></div>
            <div className="w-6 h-6 rounded-full bg-[#F8F8F8] relative "></div>
          </div>
        </div>
        <div className=" flex flex-col gap-8 lg:gap-12">
          <div className=" text-center">
            <div className=" p-4 py-2 bg-[#2F2F2F] text-white text-sm lg:text-lg w-max  font-['Space_Mono'] italic">
              <p>libre franklin</p>
            </div>

            <h2
              role="textarea"
              className="resize w-full bg-[#F1F5F9] p-2 lg:p-4  font-['Libre_Franklin'] text-2xl lg:text-4xl text-left font-bold"
              contentEditable
            >
              Font pairing made simple
            </h2>
          </div>
          <div className="">
            <div className=" p-4 py-2 bg-[#2F2F2F] text-white  text-sm lg:text-lg w-max font-['Space_Mono'] italic">
              <p>libre baskerville</p>
            </div>
            <p className="text-left lg:text-lg flex flex-col gap-6 p-3 bg-[#F1F5F9] lg:p-6 font-['Libre_Baskerville']">
              {/* (Lock) to lock fonts that you want to keep, and (Edit) to choose a
              font manually */}
              <span role="textarea" className="resize w-full" contentEditable>
                The goal of font pairing is to select fonts that share an
                overarching theme yet have a pleasing contrast. Click (Generate)
                to create a new font pairing. The text is editable, and so is
                the heading, try replacing it with your company name or other
                copy.
              </span>

              <span role="textarea" className="resize w-full" contentEditable>
                All fonts are from fonts.google.com and the font names are a
                link to their google font page so you can easily use them in
                your web projects when you find a perfect pair.
              </span>
              {/* submit a font pair */}
            </p>
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
