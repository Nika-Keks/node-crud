import {StlistModel} from "../stlist.js"


let stList = new StlistModel("./data.json")


export const getAll = (req, res) => {
  res.status(200).json(stList.getData())
}

export const create = (req, res) => {
  const newStudent = {
    ...req.body
  }
  console.log(req.body) 
  let id = stList.addRec(newStudent)
  stList.write((err) => {
    if (err){
      throw err
    }
    res.status(201).json({id: id, ...newStudent})
  })
}

export const remove = (req, res) => {
  stList.removeRec(req.params.id, (err) => {
    if (err){
      throw err
    }
    res.status(201).json({message: 'Student has been removed.'})
  })
}