import fs from 'fs'

// StList mean Students List

export class StlistModel{

    constructor(path) {
        this.path = path
        let data = JSON.parse(fs.readFileSync(path))
        this.stlist = data.stlist
        this.nextid = data.nextid
    }

    addRec(student){
        let newStudent = {id: this.nextid, ...student}
        this.stlist.push(newStudent)
        this.nextid += 1
        return newStudent.id
    }

    removeRec(id, callBack){
        this.stlist = this.stlist.filter(st => st.id != id)
        this.write(callBack)
    }

    write(callBack){
        fs.writeFile(this.path, JSON.stringify({nextid: this.nextid, stlist: this.stlist}), callBack)
    }

    getData(){
        return this.stlist
    }
}