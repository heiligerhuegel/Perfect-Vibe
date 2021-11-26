# Perfect Vibe

A platform to create roadtrips and share those experiences with other users.

## User Stories

- **404** - Error Screen with a message related to the Page.
- **500** - Error Screen with a message related to the Page.
- **homepage** - Landing page with some nice pictures and slogan aswell as description what the webside is used for.
- **sign up** - Easy and simple no instructions needed
- **login** - Easy and simple no instructions needed
- **logout** - Logout possible on every page with a button on the layout in the top left. 
- **all routes** - A list of all the routes that have been created by all Users
- **add routes** - Gives the logged in user the ability to add new routes
- **my routes** - Gives the logged in user the ability to see all the 
- **edit routes**  - Gives the logged in User the ability to edit the own routes

## Server Routes (Back-end):

| METHOD | ROUTE                   | DESCRIPTION                                | REQUEST - BODY                                               |
| ------ | ----------------------- | ------------------------------------------ | :----------------------------------------------------------- |
| GET    | "/"                     | rendes Homepage (index)                    |                                                              |
| GET    | "/secret"               | renders dummy secret page                  |                                                              |
| GET    | "/user/:id"             | renders all roads by user                  |                                                              |
| GET    | "/signup"               | renders signup page                        |                                                              |
| POST   | "/signup"               | Sends signup from data to the server       | {userName, password}                                         |
| GET    | "/login"                | renders login page                         |                                                              |
| POST   | "/login"                | Sends login from data to the server        | {userName,password}                                          |
| GET    | "/logout"               | deletes session cookie                     |                                                              |
| GET    | "/roads"                | rendes all roads from database as partials |                                                              |
| GET    | "/road/:id"             | renders one road by :id from database      |                                                              |
| GET    | "/createroute"          | renders create route page                  |                                                              |
| POST   | "/createroute"          | Sends create road data to server           | {name,description,length(km),length(min),coordinates X, coordinates Y} |
| GET    | "/edit-road/:id"        | renders edit road page                     |                                                              |
| POST   | "/edit-road/:id"        | Sends edit road data to server             | {name, description}                                          |
| POST   | "/edit-road/delete/:id" | Sens delete request to server by Id        | {Object Id}                                                  |

## Models
#### User model:

```
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
```

#### Routes model:

```
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
```


### Git
The url to your repository and to your deployed project
https://github.com/heiligerhuegel/Perfect-Vibe
https://perfectvibe.herokuapp.com/

### Slides

https://docs.google.com/presentation/d/11TE_9uadLJgYhSg6c2byuz-Vv6kVml_kmd3b2a2FIdo/edit

### Contributors
Giorgi Trapaidze - https://github.com/giorgitrapaidze 
- https://www.linkedin.com/in/giorgi-trapaidze-9635623a/

Manuel Wegener - https://github.com/heiligerhuegel 
- https://www.linkedin.com/in/manuelwegener/
