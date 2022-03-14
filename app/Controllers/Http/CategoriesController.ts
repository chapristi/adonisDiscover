 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {

    public async store ({} : HttpContextContract){
       await Category.create({name : "categorie1"})
     



    } 



}
