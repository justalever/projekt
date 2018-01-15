![Let's Build: With Ruby on Rails - Project Management App - 6](https://i.imgur.com/IPbrAlY.jpg)

# Let's Build: With Ruby on Rails - Project Management App

Welcome to my next installment to the ongoing series called "[Let's Build: With Ruby on Rails](https://web-crunch.com/series/)". This 10-part series will cover building a project management type of application from the ground up. 

Similar to the previous installments I'll dive a bit further into more technical aspects of Ruby on Rails. We'll discuss things such as nested attributes, model relations, and getting a little fancy with forms using [Vue.js](https://vuejs.org/). 

As prerequisite, I recommend following at least one of the previous parts of the "Let's Build: With Ruby on Rails" series. These will help explain some foundational concepts of which I may skim over in this series. You can find those below:

- [Introduction to the series](https://web-crunch.com/lets-build-with-ruby-on-rails-introduction/)
- [Installing Ruby on Rails](https://web-crunch.com/lets-build-with-ruby-on-rails-installation/)
- [Build a blog with comments](https://web-crunch.com/lets-build-with-ruby-on-rails-blog-with-comments/)
- [Build a Twitter clone](https://web-crunch.com/lets-build-with-ruby-on-rails-a-twitter-clone/)
- [Build a Dribbble clone](https://web-crunch.com/lets-build-dribbble-clone-with-ruby-on-rails/)

### What are we building? Projekt

For lack of a better name, I titled the app of this series Projekt. The goal of the app is to be a home for any amount of projects(*think [Basecamp](https://basecamp.com) but much more stripped down*). A project lives within a team and can have as many users as necessary. A user can only belong to one team at a time (*this is a small side-effect of the [Devise gem](https://github.com/plataformatec/devise). Ultimately, we'd want to extend this to allow a single user to belong to multiple teams.*)

The app will have 3 overlying models/relationships to tie together each other as we press forward but I'll outline the "wants" below:

1. A User can create a project if they belong to a team.
2. Creating a team assigns both your own account plus those you invite to a team.
3. Projects require a team in order to be created.

### The tech stack

I think it's pretty obvious we'll be using Ruby on Rails in this series. On top of Rails I wanted to approach our app with a little more modern of a mindset set. Much of the interactivity I introduce has Vue.js to think. In our Teams model for example I implement a form with nested user attributes. The end goal is to create a team and invite new users to the team all at once. Nested attributes and Vue.js make this a very fluid process. 

Continue reading at [web-crunch.com](https://web-crunch.com/lets-build-with-ruby-on-rails-project-management-app)