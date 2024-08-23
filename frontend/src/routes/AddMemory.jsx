import axios from "../axios-config"

import { useState } from "react"

import './Addmemory.css';

function AddMemory() {

  const [inputs, setInputs] = useState([])
  const [image, setImage] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData()
    formData.append("image", image)
    formData.append("title", inputs.title)
    formData.append("description", inputs.description)

    try {
      
      const response = await axios.post("/memories", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

    } catch (error) {
      console.log(error)
    }
  };

  const handleChange = (event) => {
    if(event.target.name === "image") {
      setImage(event.target.files[0]);
    }else {
      setInputs({...inputs, [event.target.name]: event.target.value})
    }
  }

  return (
    <div className="add-memory-page">
      <h2>Crie uma nova memória</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Titulo:</p>
          <input type="text" placeholder="Defina um título" name="title" onChange={handleChange}/>
        </label>
        <label>
          <p>Descrição:</p>
          <textarea name= "description" placeholder= "Explique oque aconteceu..."  onChange={handleChange}/>
        </label>
        <label>
          <p>Foto:</p>
          <input type="file" name="image"  onChange={handleChange}/>
        </label>
        <input type="submit" value="enviar" className="btn" />
      </form>
    </div>
  )
}

export default AddMemory