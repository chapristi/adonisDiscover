import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category';

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public name:string

  @column()
  public description:string

  @belongsTo(()=>Category)
  public category: BelongsTo<typeof Category>

  @column()
  public categoryId : number
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
