import { connect } from '../../Mongodb/connect';
import { Info } from '../../Mongodb/schema'


export default async function handler(req, res) {

    await connect()

    if (req.method == 'POST') {

        let user = req.body


        let insertedObj = {
            name: user.name,
            age: user.age,
            sex: user.sex,
            complaints: user.complaints,
            diagnose: user.diagnose,
            medicine: [...user.medicine]


        }

        let obj = await Info.insertMany([{ ...insertedObj }]);
        res.json({ obj, yourObj: insertedObj })
        // res.json({ insertedObj })
    }
    else {
        res.json({ msg: 'invalid function request' })
    }
}