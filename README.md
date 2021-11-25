```
Perfect Vibe






A platform to create roadtrips and share those experiences with other users.




## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

- **homepage** - Landing page with some nice pictures and slogan aswell as description what the webside is used for.

- **sign up** - Easy and simple no instructions needed

- **login** - Easy and simple no instructions needed

- **logout** - Logout possible on every page with a button on the layout in the top left. 

- **all routes** - A list of all the routes that have been created by all Users

- **add routes** - Gives the logged in user the ability to add new routes

- **my routes** - Gives the logged in user the ability to see all the 

- **edit routes**  - Gives the logged in User the ability to edit the own routes





## Server Routes (Back-end):



                                                     







## Models

User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, //-> Ideally, should be unique, but its up to you
      required: true
    },
    password: { type: String, required: true },
    routes: [
      { type: Schema.Types.ObjectId, ref: "Road" }
    ]
  },
  {
    timestamps: true,
  }
);

Routes model
const roadSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  userName: { type: String },
  name: { type: String, required: true },
  description: { type: String, required: false },
  country: { type: String, required: false },
  length: { type: Number, required: true },
  duration: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  waypoints: [[{ type: Number }, { type: Number }]],
});



### Git

The url to your repository and to your deployed project

https://github.com/heiligerhuegel/Perfect-Vibe

https://perfectvibe.herokuapp.com/



### Slides



### Contributors
Giorgi Trapaidze - https://github.com/giorgitrapaidze - https://www.linkedin.com/in/giorgi-trapaidze-9635623a/

Manuel Wegener - https://github.com/heiligerhuegel - https://www.linkedin.com/in/manuelwegener/
```
