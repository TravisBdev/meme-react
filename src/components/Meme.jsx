export default function Meme() {
  function handleClick() {
    console.log("button was clicked");
  }
  return (
    <main>
      <div action="" className="meme-form">
        <input type="text" className="input" placeholder="Top Text" />
        <input type="text" className="input" placeholder="Bottom Text" />
        <button onClick={handleClick} className="memeBtn">
          Get a new meme image 😂
        </button>
      </div>
    </main>
  );
}
