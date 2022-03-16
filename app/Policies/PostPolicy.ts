import Bouncer, { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Models/User'
import Post from 'App/Models/Post'

export default class PostPolicy extends BasePolicy {
	public async delete(user: User, post: Post) {

		if( post.id === user?.id){
			return true;
		}
		return Bouncer.deny('Authorization required', 401)
	}
}
