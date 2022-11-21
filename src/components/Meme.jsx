export default function Meme() {
  function handleClick(e) {
    e.preventDefault();
    console.log("button was clicked");
  }
  return (
    <main>
      <form action="" className="meme-form">
        <input type="text" className="input" placeholder="Top Text" />
        <input type="text" className="input" placeholder="Bottom Text" />
        <button onClick={handleClick} className="memeBtn">
          Get a new meme image 😂
        </button>
      </form>
    </main>
  );
}
