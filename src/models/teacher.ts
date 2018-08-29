import jagql from '@jagql/framework'
import {getHandler} from '../handlers/sqlHandler';
import {Batch} from './batch'

const Joi = jagql.Joi
const handler = getHandler()

export interface Teacher {
    name: string
    id: string
    contactNo?: string
    email?: string
    batches?: Batch[]
}

jagql.define <Teacher>({
    resource: 'teachers',
    primaryKey: 'string',
    handlers: handler,
    namespace: 'cb',
    attributes: {
        name: Joi.string().required(),
        id: Joi.string().length(2).required(),
        contactNo: Joi.string().allow(null),
        email: Joi.string().email().allow(null),
        batches: Joi.belongsToMany({resource: 'batches', as: 'center'}),
    },
    examples: [
        {id: 'AG', name: 'Arnav Gupta', type: 'teachers'},
        {id: 'PR', name: 'Prateek Narang', type: 'teachers'},
    ],
})

handler.populate({force: true})
