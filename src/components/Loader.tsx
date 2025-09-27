import "./loader.css"; // import CSS file

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black/90">
      <div className="loader-wrapper">
        <span className="loader-letter">L</span>
        <span className="loader-letter">o</span>
        <span className="loader-letter">a</span>
        <span className="loader-letter">d</span>
        <span className="loader-letter">i</span>
        <span className="loader-letter">n</span>
        <span className="loader-letter">g</span>

        <div className="loader"></div>
      </div>
    </div>
  );
}
