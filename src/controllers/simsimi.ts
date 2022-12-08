import { Request, Response } from 'express';

import { simsimiModel } from '../db/models/simsimi';

export const makeSimSimi = async (req: Request, res : Response ) => {
    console.log('makeSimSimi with request : ', req.body);
    try {
        const simsimi = new simsimiModel(req.body);
        await simsimi.save({ validateBeforeSave : false });
        return res.status(201).json(
            {
                message : `make SimSimi success`,
                id : simsimi.id,
            }
        ) 
    } catch (e) {
        console.log(`makeSimSimi error with ${e}`);
        return res.status(403).json({
            errormessage : `${e}`
        });
    }
};

export const getTalkSets = async (req : Request, res: Response) => {
    console.log(`getTalkSets with request : ${req.body}`);
    try { 
        const simsimi_id = req.body.id as string;
        const simsimi = await simsimiModel.findById(simsimi_id);
        if(!simsimi) {
            return res.status(400).json({
                message : `There is no simsimi with id : ${simsimi_id}`
            });
        }
        return res.status(200).json({
            simsimi
        });
    } catch(e) {
        return res.status(403).json({
            errormessage: `${e}`
        });
    }
}