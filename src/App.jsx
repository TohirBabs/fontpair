import { useState } from "react";
import "./App.css";

function App() {
  //   Cormorant Garamond & Proza Libre
  // Libre Franklin & Libre Baskerville
  // Trirong & Rubik
  // Work Sans & Taviraj
  // Eczar & Gentium Plus
  const [activepair, setActivepair] = useState(0);
  console.log(activepair);
  const fontPairs = [
    { heading: "Cormorant Garamond", body: "Proza Libre" },
    { heading: "Libre Franklin", body: "Libre Baskerville" },
    { heading: "Trirong", body: "Rubik" },
    { heading: "Work Sans", body: "Taviraj" },
    { heading: "Eczar", body: "Gentium Plus" },
  ];
  return (
    <div className=" w-screen min-h-screen flex items-center justify-center  bg-[#F8F8F8]">
      <div className="flex flex-col gap-10 lg:gap-10 max-w-xl ">
        <div className="flex items-center justify-between py-4">
          <h1 className="underline text-3xl lg:text-4xl font-['Space_Mono'] font-[700]">
            FONT-PAIR
          </h1>
          <button className=" flex items-center pr-4">
            <div className="w-9 h-9 rounded-full bg-[#2F2F2F] relative left-8"></div>
            <div className="w-6 h-6 rounded-full bg-[#F8F8F8] relative "></div>
          </button>
        </div>
        <div className=" flex flex-col gap-8 lg:gap-10">
          <div className=" text-center">
            <a
              href={`https://fonts.google.com/specimen/${fontPairs[
                activepair
              ].heading.replaceAll(" ", "+")}`}
              className=" p-4 py-2 bg-[#2F2F2F] text-white text-sm  w-max block font-['Space_Mono'] italic"
            >
              <span className="lowercase">{fontPairs[activepair].heading}</span>
            </a>

            <h2
              style={{
                fontFamily: fontPairs[activepair].heading,
              }}
              role="textarea"
              className="resize w-full bg-[#F1F5F9] p-2 lg:p-4  text-3xl lg:text-4xl text-left "
              contentEditable
            >
              Font pairing made simple
            </h2>
          </div>
          <div className="">
            <a
              href={`https://fonts.google.com/specimen/${fontPairs[
                activepair
              ].body.replaceAll(" ", "+")}`}
              className=" p-4 py-2 bg-[#2F2F2F] text-white  text-sm block w-max font-['Space_Mono'] italic"
            >
              <span className="lowercase">{fontPairs[activepair].body}</span>
            </a>
            <p
              style={{
                fontFamily: fontPairs[activepair].body,
              }}
              className="text-left lg:text-lg flex flex-col gap-6  bg-[#F1F5F9]  "
            >
              {/* (Lock) to lock fonts that you want to keep, and (Edit) to choose a
              font manually */}
              <span
                role="textarea"
                className="resize w-full p-2 lg:p-6 "
                contentEditable
              >
                The goal of font pairing is to select fonts that share an
                overarching theme yet have a pleasing contrast. Click (Generate)
                to create a new font pairing. The text is editable, and so is
                the heading, try replacing it with your company name or other
                copy.
              </span>

              <span
                role="textarea"
                className="resize w-full p-2 lg:p-6 "
                contentEditable
              >
                All fonts are from fonts.google.com and the font names are a
                link to their google font page so you can easily use them in
                your web projects when you find a perfect pair.
              </span>
              {/* submit a font pair */}
            </p>
          </div>
          <button
            onClick={() =>
              setActivepair((active) => (active + 1) % fontPairs.length)
            }
            className="w-full p-4 bg-[#2F2F2F] text-white text-[1rem] font-['Space_Mono']"
          >
            generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
