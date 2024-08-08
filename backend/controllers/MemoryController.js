const Memory = require("../models/Memory");


const createMemory = async ( req, res) => {
  try {
    
    const {title, description} = req.body;

    const src = `image/${req.file.filename}`;

    if(!title || !description) {
        return res.status(400).json({msg: "Por favor preencha todos os campos"})
    }

    const newMemory = new Memory({
        title, src, description
    })

    await newMemory.save()

    res.json({msg:"Memoria criada com sucesso", newMemory})

  } catch (error) {
    console.log(error.message)
    res.status(500).send("ocorreu um erro")
  }
};

module.exports = {
    createMemory,
}