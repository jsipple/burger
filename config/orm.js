const connection = require('./connection')

const printQuestionMarks = (num) => {
  const arr = []
  for (let i = 0; i < num; i++) {
    arr.push('?')
  }
  return arr.toString()
}

const objToSql = (ob) => {
  const arr = []
  for (let key in ob) {
    let value = ob[key]
    // ask about what this call does i'm assuming justchecks if there is a property
      if (Object.hasOwnProperty.call(ob, key)) {
        // shouldn't need what is before this because using ``
        arr.push(key + '=' + value)
      }
  }
  return arr.toString()
}

const orm = {
  selectAll: (tableInput, cb) => {
    const queryString = `select * from ${tableInput};`
    connection.query(queryString, (err, result) =>{
      if (err) throw err
      cb(result)
    })
  },
  insertOne: (table, cols, vals, cb) => {
    const queryString = `insert into ${table} (${cols.toString()}) values (${printQuestionMarks(vals.length)})`
    
    console.log(vals)


    connection.query(queryString, vals, (err, result) => {
      if (err) throw err
      cb(result)
    })
  },
  updateOne: (table, objColVals, condition, cb) => {
    const queryString = `update ${table} set ${objToSql(objColVals)} where ${condition}`
    console.log(queryString)
    connection.query(queryString, (err, result)=> {
      if (err) throw err
      cb(result)
    })
  }
}

module.exports = orm