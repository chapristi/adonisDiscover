
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post'

import UpdatePostValidator from 'App/Validators/UpdatePostValidator'
export default class PostsController {

    public async index({view}: HttpContextContract) {
        
        return view.render("posts.index",{
            title  : "incredible title",
            
        })
    }
    public async store({request,session,response} : HttpContextContract){

        const {name,description} = await request.validate(UpdatePostValidator)    
        const post = await Post.create({name : name,description : description,categoryId :1})
        //console.log(post)  
        //recuperer l'id console.log(post.$attributes.id)
        session.flash({ successmessage: 'User have been created successfully'})
        return response.redirect().back()
    
    }
    public async show({view,params} : HttpContextContract){

        /*
         pagination : 
                    definit le faite que la requete sera effect sur la 1ere page
                    const page = request.input('page', 1)
                    const limit = 10

                    const posts = await Database.from('posts').paginate(page, limit)
                    console.log(posts)

        
        
        */
        const post = await Post.query().preload("category").where("id",params.id).firstOrFail()
        console.log(post.categoryId);
        return view.render("posts.show",{
            post : await Post.findOrFail(params.id),
            id : params.id
            
        })
   
    
    }
    public async update({params,request,session,response,bouncer} : HttpContextContract){
   

        const post : Post  = await Post.findOrFail(params.id)
        await bouncer.with("PostPolicy").authorize("delete",post)
        post.merge( await request.validate(UpdatePostValidator)).save()
        session.flash('success',"l'article a bien été sauvegardé")
        return response.redirect().toRoute('home')
    }
}
