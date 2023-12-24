# t3a2-fitness-class
# FitnessNow

## Resources

- [Documentation](https://github.com/jennlai95/t3a2-fitness-class)
- <a href= https://github.com/jennlai95/t3a2-fitness-now-front-end > Front end repo </a>
-  <a href= https://github.com/jennlai95/t3a2-fitness-now-back-end > Back end repo </a>
- [Notion project management](https://flashy-mushroom-c40.notion.site/cd721472bb514036bebd6fdf9146bf67?v=584439e240ef474f81ce5f17940f705f&pvs=4 "Notion")
- [Wireframes-figma](https://www.figma.com/file/lpl5nVrmbn0s1fxrgEks3l/Wireframe-Fitness-Now?type=design&node-id=0%3A1&mode=design&t=oifo3NLTtMHAkr5n-1)

Deployed website: https://t3a2-fitness-now.netlify.app/
Deployed server: https://fitness-studio-app-e1ebefd30762.herokuapp.com/

- Environment variables




# Part A 
# Description 

#### Description of  your website, including:
- Purpose
- Functionality /features
- Target audience
- Tech stack

## Purpose

Fitness class booking system 
This app is going to replicate a booking system for fitness lovers everywhere to be able to book classes in their local gym. This allows the users to create account, browse the different open classes and time available and make payments for the classes. 

Previously, the gym would take the payments and bookings manually and taking attendance on spreadsheets. 
This could lead to human error and also limits the booking times to business hours. With this app, clients can make bookings at anytime from home and on their phone and can easily see the availability of the classes. 

## Functionality/ feature
#### User registration and Authentication 
- To book classes, users must create new accounts first, so they can be contacted for any changes in class times and also to make payment and keep track of their user date. 
- Users can create, edit and delete own account

- Admin users will have authorisation to make changes to regular users such as deleting or creating them. Admin users can also make posts for available classes and update them as they go. 

#### Class timetable  

Previous plan: 
- Users can search for the different types of classes such as pilates, yoga, group training classes etc. 
- Users can view all the available sessions in a weekly time. 
- Admins can retrieve booking details for each specific classes and can look up users details so they can update them on any changes. 
- Admins can create new classes or update or delete the class timetable
implemented: schedule view from database
- not implemented: search function for different types of classes are not enabled on this production 


#### Booking screen 
- clients can choose specific time slot to attend the chosen class from the search results
- will prompt clients to login/ register if not already logged in 


## Tech Stack

#### Front end 
- Javascript 
- HTML
- CSS

#### Backend 

- NodeJS
- ExpressJS

#### Database 

- MongoDB
- Mongoose

#### Deployment 

- Heroku - back-end
- Netlify - front-end

#### Testing 

- Jest


### Libraries 


### Server side 
"bcrypt"
"bcryptjs"
"cors"
"dotenv"
"express"
"express-validator"
"jsonwebtoken"
"mongodb"
"mongodb-memory-server"
"mongodb-memory-server-core"
"mongoose": 
"mongoose-beautiful-unique-validation":
"mongoose-unique-validator"
"react-jwt"
"validator"
jest

To run tests = npx test 

### front end client libraries 

@heroicons/react
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
axios
crypto-browserify
dotenv
notistack
react
react-date-range
react-datepicker
react-dom
react-router-dom
react-scripts
react-slick
react-tailwindcss-datepicker
slick-carousel
web-vitals
jest

To run tests = npm test 


### Notion/ Project management 