import { useState } from "react";
import Switch from "@mui/material/Switch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Tooltip } from "@mui/material";
import "./App.css";
import Solution from "./components/Solution";

function App() {
  const [pixelPerfect, setPixelPerfect] = useState(true);
  return (
    <>
      {/*
  Header to control the type of solution i.e., Pixel Perfect vs Responsive
  */}
      <header className="fixed w-screen top-0 h-auto flex justify-center items-center text-center font-semibold py-1 bg-emerald-500 text-white">
        <div
          className="w-fit hover:bg-emerald-800 cursor-pointer px-2 rounded-lg duration-300"
          onClick={() => {
            setPixelPerfect(!pixelPerfect);
          }}
        >
          View Responsive
          <Switch
            checked={pixelPerfect}
            onChange={() => {
              setPixelPerfect(!pixelPerfect);
            }}
            inputProps={{ "aria-label": "controlled" }}
          />
          Pixel Perfect Solution
        </div>
      </header>
      {/*
  Header Done
  */}

      <Solution pixelPerfect={pixelPerfect} />

      {/*
  Footer Starts
  */}
      <footer className="fixed w-screen cursor-pointer bottom-0 h-auto flex justify-center items-end text-center font-semibold py-1 bg-slate-500 text-white">
        Made By&nbsp;
        <a
          href="https://akshat-garg.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover:decoration-dotted hover:underline h-full flex items-end">
            Akshat Garg
            <sup className="scale-50 origin-left">
              <ArrowOutwardIcon />
            </sup>
          </div>
        </a>
        <div className="animate-pulse">
          <Tooltip title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/akshat-garg-580322241/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </Tooltip>
          &nbsp; &nbsp;
          <Tooltip title="Github">
            <a
              href="https://github.com/akshat-g-07"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </Tooltip>
          &nbsp; &nbsp;
          <Tooltip title="Mail: akshatg805@gmail.com">
            <a
              href="mailto:akshatg805@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MailIcon />
            </a>
          </Tooltip>
        </div>
      </footer>
      {/*
  Footer Ends
  */}
    </>
  );
}

export default App;
