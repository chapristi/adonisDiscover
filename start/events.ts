import Event from '@ioc:Adonis/Core/Event'

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
})
//verifie que les ifos envoyé lors de l'appel de l'event sont correct
declare module '@ioc:Adonis/Core/Event' {
    interface EventsList {
      'new:user': { id: number }
    }
}
  
