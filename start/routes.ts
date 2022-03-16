/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User';
import Event from '@ioc:Adonis/Core/Event'


 

Route.get('/', async ({ view }) => {
  return view.render('welcome')
}).as("home")
Route.get('/posts', 'PostsController.index');
Route.post('/posts', 'PostsController.store')
Route.get('/posts/update/:id', 'PostsController.update')
Route.get('/posts/show/:id', 'PostsController.show')


Route.get('/category', 'CategoriesController.store')


Route.post('/login', async ({ auth, request }) => {
  const email = request.input('email')
  const password = request.input('password')


  await auth.use('web').attempt(email, password) 

})

Route.get('/form_login', "UsersController.form_login" )
//.middleware("auth:web,api")
//await auth.use('web').authenticate()

// ✅ Request authenticated
//console.log(auth.user!)

Route.get('/register', async ({}) => {

  await User.create({email: 'tet@example.com',password: 'test'})
  //appel l'event et lui donne les infos voulu dans un object
  Event.emit('new:user', { id: 1 })

})

