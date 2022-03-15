 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {



    public async form_login({view}: HttpContextContract) {
        
        return view.render("auth.index",{
          
            
        })
    }
}
