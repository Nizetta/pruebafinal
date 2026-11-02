import Image from "react-bootstrap/Image";
function Intruso() {
    return (
      <>
        <h1>INTRUSO</h1>
       <div>
          <h1 className="h1">ronda</h1>
          <Image src="../src/assets/kurama.jpg" width={300} redoundedcircle />
          <h2>opciones</h2>
          <div className="div">
            <button className="boton">op1</button>
            <button className="boton">op2</button>
            <button className="boton">op3</button>
          </div>
        </div>
      </>
    );
}
export default Intruso;