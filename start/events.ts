import Event from '@ioc:Adonis/Core/Event'
import Route from '@ioc:Adonis/Core/Route'

/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
//creation de l'event
Event.on('new:user', (user) => {
  console.log(user)
  //add a signed url may be to verifyEmail
  Route.builder()
   .params({ email: 'foo@bar.com' })
   .makeSigned('verifyEmail', { expiresIn: '30m' })


})
//verifie que les ifos envoyé lors de l'appel de l'event sont correct
declare module '@ioc:Adonis/Core/Event' {
    interface EventsList {
      'new:user': { id: number }
    }
}
  
