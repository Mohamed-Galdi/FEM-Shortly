import { useState } from "react";
import axios from "axios";

function Shorter() {
  const [longLink, setLongLink] = useState("");
  const [shortenLink, setShortenLink] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(-1);
  const [wrongInput, setWrongInput] = useState(-1);

  const shortLink = async () => {
    try {
      if(longLink == ""){
        setWrongInput(1)

      }else{
        setWrongInput(-1);
        const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${longLink}`
      );
      const shortenedLink = response.data.result.full_short_link;
      setShortenLink(shortenedLink);

      let links = localStorage.getItem("links") || "[]";
      let linksArray = JSON.parse(links);
      const linkObj = {
        longLink: longLink,
        shortenLink: shortenedLink,
      };
      linksArray.push(linkObj);
      let linksString = JSON.stringify(linksArray);
      localStorage.setItem("links", linksString);
      }
    } catch (error) {
      // console.error("Error shortening the link:", error);
      setWrongInput(1);
      setTimeout(() => {
        setCopiedIndex(-1);
      }, 5000);
    }
  };

  
  let links = localStorage.getItem("links") || "[]";
  let linksArray = JSON.parse(links).reverse();;

  const handleCopy = (index, shortenLink) => {
    navigator.clipboard.writeText(shortenLink);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(-1);
    }, 5000);
  };

  return (
    <div className="mx-auto md:max-w-screen-xl max-w-screen-sm ">
      <div
        className="mt-20 md:px-16 md:mx-0  bg-shortly_pr_darkViolet md:h-[150px] h-[200px] rounded-3xl relative -top-[75px] bg-cover bg-center w-full flex justify-around md:gap-4 items-center md:flex-row flex-col "
        style={{
          backgroundImage: "url('images/bg-shorten-desktop.svg')",
        }}
      >
        <div className="w-10/12 md:mx-0 mx-10">
          <p
            className={`${
              wrongInput === 1
                ? "text-red-500 absolute md:top-3 top-[85px] text-lg font-shortly font-bold md:left-24"
                : "hidden"
            } `}
          >
            {wrongInput === 1 ? "invalid link !!!" : ""}
          </p>
          <input
            type="text"
            placeholder="Shorten a link here..."
            onChange={(e) => setLongLink(e.target.value)}
            className={`${
              wrongInput === 1
                ? " outline-4 outline-red-600 ring-4 ring-red-600 "
                : ""
            } w-full h-16 rounded-xl placeholder-shortly_grayishViolet text-2xl font-shortly ps-6 `}
          />
        </div>

        <button
          onClick={shortLink}
          className="md:w-2/12 w-10/12 bg-shortly_pr_cyan hover:bg-[#73d8d7] hover:cursor-pointer px-6 py-2 rounded-xl text-white font-bold font-shortly h-16 text-lg"
        >
          {" "}
          Shorten It!
        </button>
      </div>

      <div>
        <div className="relative -top-10 font-shortly font-bold">
          {linksArray.map((link, index) => (
            <div
              key={index}
              className=" flex md:flex-row flex-col  bg-white mb-2 px-4 py-6 rounded-md justify-between items-center "
            >
              <p className="mx-4 md:border-b-0 border-b-2 pb-2 md:pb-0 w-full overflow-hidden">{link.longLink}</p>
              <div className="flex md:gap-8 gap-4  md:my-0 my-2 items-start md:items-center md:flex-row flex-col w-full">
                <p className="md:mx-4 text-shortly_pr_cyan text-start">{link.shortenLink}</p>
                <button
                  onClick={() => {
                    handleCopy(index, link.shortenLink);
                  }}
                  className={`${
                    copiedIndex === index
                      ? "bg-shortly_pr_darkViolet hover:bg-shortly_pr_darkViolet/[0.7] px-4"
                      : "bg-shortly_pr_cyan hover:bg-shortly_pr_cyan/[0.7] px-7"
                  } md:mx-6  py-2 rounded-xl text-white w-full`}
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shorter;
