import { schema,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdatePostValidator {
  constructor(protected ctx: HttpContextContract) {}

  
        public schema = schema.create({
            name: schema.string({ escape: true, trim: true},[
                rules.minLength(5)
            ]),
            description: schema.string({  escape: true, trim: true },[
                rules.minLength(52),
                
            ]),
           
          })
        
          
          

  public messages = {
    "name.minLength": '{{ field }} must be at least {{ options.minLength }} characters long',
    "description.minLength": '{{ field }} must be at least {{ options.minLength }} characters long',

  }
}
