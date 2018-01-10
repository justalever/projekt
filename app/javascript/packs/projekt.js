import Vue from 'vue/dist/vue.esm'
import VueResource from 'vue-resource'


Vue.use(VueResource)

document.addEventListener('turbolinks:load', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  var element = document.getElementById("team-form")
  if (element != null) {

    var id = element.dataset.id
    var team = JSON.parse(element.dataset.team)
    var users_attributes = JSON.parse(element.dataset.usersAttributes)
    users_attributes.forEach(function(user) { user._destroy = null })
    team.users_attributes = users_attributes

    var app = new Vue({
      el: element,
      data: function() {
        return {
          id: id,
          team: team,
          errors: [],
          scrollPosition: null
        }
      },
      mounted() {
        window.addEventListener('scroll', this.updateScroll);
      },
      methods: {
        updateScroll() {
          this.scrollPosition = window.scrollY
        },
        addUser: function() {
          this.team.users_attributes.push({
            id: null,
            name: "",
            email: "",
            //position: "",
            _destroy: null
          })
        },

        removeUser: function(index) {
          var user = this.team.users_attributes[index]

          if (user.id == null) {
            this.team.users_attributes.splice(index, 1)
          } else {
            this.team.users_attributes[index]._destroy = "1"
          }
        },

        undoRemove: function(index) {
          this.team.users_attributes[index]._destroy = null
        },

        saveTeam: function() {
          // Create a new team

          if (this.id == null) {
            this.$http.post('/teams', { team: this.team }).then(response => {
              Turbolinks.visit(`/teams/${response.body.id}`)
            }, response => {
              console.log(response)

              if (response.status = 422) {
                var json = JSON.parse(response.bodyText);
                this.errors = json["users.email"][0];
              }
            })


          // Edit an existing team
          } else {
            this.$http.put(`/teams/${this.id}`, { team: this.team }).then(response => {
              Turbolinks.visit(`/teams/${response.body.id}`)
            }, response => {
              console.log(response)
            })
          }
        },

        existingTeam: function() {
          return this.team.id != null
        }
      }
    })

  }
})