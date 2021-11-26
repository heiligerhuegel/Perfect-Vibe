```
Perfect Vibe

A platform to create roadtrips and share those experiences with other users.

## User Stories

- **404** - Erorr Screen with a message related to the Page.
- **500** - Erorr Screen with a message related to the Page.
- **homepage** - Landing page with some nice pictures and slogan aswell as description what the webside is used for.
- **sign up** - Easy and simple no instructions needed
- **login** - Easy and simple no instructions needed
- **logout** - Logout possible on every page with a button on the layout in the top left. 
- **all routes** - A list of all the routes that have been created by all Users
- **add routes** - Gives the logged in user the ability to add new routes
- **my routes** - Gives the logged in user the ability to see all the 
- **edit routes**  - Gives the logged in User the ability to edit the own routes





## Server Routes (Back-end):

Index: 
GET "/" 								-renders Homepage
GET "/secret"						-dummy secret page

User:
GET "/:id"							-User page only visible if User is logged in

Auth:
GET "/signup" 					-loads signup page	
POST "/signup"					-gets data from signup page and creates a user aswell as cookie
GET "/login"						-loads login page
POST "/login"						-takes data from user compares it to database and creates cookie
GET "/logout"						-deletes session cookie

Roads:
GET "/roads"									-loads all the roads from database and shows them
GET "/road/:id"								-loads one road by id from database
GET "/createroute"						-loads create new route page 
POST "/createroute"						-takes data from create page and adds a new route to 																						database
GET "/edit-road/:id"					-loads the edit route page with info from database that 																				is changable.
POST "/edit-road/:id"					- takes changed data from edit route page and applys it 																				to database
Post "/edit-road/delete/:id"	- deletes the route by Id if delete button is pressed on 																				the edit-route page

## Models
User model:
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

Routes model:
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
Giorgi Trapaidze - https://github.com/giorgitrapaidze 
- https://www.linkedin.com/in/giorgi-trapaidze-9635623a/

Manuel Wegener - https://github.com/heiligerhuegel 
- https://www.linkedin.com/in/manuelwegener/
```
