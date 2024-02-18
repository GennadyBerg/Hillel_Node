import { ValidationError } from "joi";


function validation (req,res,next){
            const {body} = reg;
            if (!body.password && !body.login){
                        next(new Error('validation'))
            }
}
export{validation}