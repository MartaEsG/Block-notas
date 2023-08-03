import { useState } from "react";
import './Gallery.css';
export default function Gallery (){

      const [lista, setLista] = useState ([
        {name: "cuaderno" , cantidad: "2", coments:[]},
        {name: "goma", cantidad:"5", coments:[]},
        {name: "lapiz", cantidad: "3", coments:[]}
      ])


      const remove = (index) => {
        const copyList = [...lista];
        copyList.splice(index, 1);
        setLista(copyList);
      }
      
      const edit = (index) => {
        const copyList = [...lista];
        const name= prompt("Escribe un nombre")
        const cantidad= prompt("Escribe una cantidad")
        if (name && name !== "" && cantidad && cantidad !==""){
            copyList[index]={name, cantidad}
            setLista([...copyList])
        }
      }

      const addItem = () => {
        const copyList = [...lista];
        const name= prompt("Escribe un nombre")
        const cantidad= prompt("Escribe una cantidad")
        setLista([...copyList, {name:name, cantidad:cantidad, coments:[]}])
      }

const [text, setText] = useState ("")

      const newComent = (index) => {
        
        const copyText = [...text]
          const copyList = [...lista]
          copyList[index].coments = copyText
          setLista([...copyList])
      
      }
        
    
    

    return <div>
        <div className="c-element">
        
        {lista.map((item, index) => <div key={item.name} className="c-element-div">
          <button onClick={()=>remove(index)}>Remove</button>
          <button onClick={()=>edit(index)}>Edit</button>
            <h2>{item.name}</h2>
            <p>Cantidad: {item.cantidad}</p>
            <div className="c-element-button">
              <input type="text" onChange={(e) => setText(e.target.value)}/>
              <button onClick={()=>newComent(index)}>Enviar comentario</button>
              <ul>comentarios:
                <li key={index}>{item.coments}</li>
              </ul>
              
              
            </div>
        </div>)}
    </div>
    <button onClick={()=>addItem()}>Añadir</button>
    </div>
}
