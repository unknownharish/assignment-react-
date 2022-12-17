// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose from 'mongoose'


 function connect() {

  mongoose.connect('mongodb://localhost:27017/company', (err) => {
    err ? console.log(err) : console.log('db connected sucessfully')
  })


}


module.exports = { connect }


