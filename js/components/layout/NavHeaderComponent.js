export default {
    template: `
    <div class="top-bar">
        <div class="top-bar-left">
            <ul class="menu" id="main-nav">
            <p>Roku Flashback</p>
            <li v-on:click="changeMediaType">
                <img src="images/icon-movies.svg" alt="Movies Icon" id="movie" />
            </li>
            <li v-on:click="changeMediaType">
                <img src="images/icon-television.svg" alt="TV Icon" id="tv"/>
            </li>
            <li v-on:click="changeMediaType">
                <img src="images/icon-music.svg" alt="Music Icon" id="music"/>
            </li>
            <li v-on:click="changeMediaType">
                <img src="images/icon-movies.svg" alt="Kids Icon" id="kids"/>
            </li>
            </ul>
        </div>
        <div class="top-bar-right">
            <ul class="menu">
            <li><input type="search" name="" placeholder="Search"></li>
            <li><button type="button" class="button">Search</button></li>
            <li><button type="button" class="button" v-on:click="logout()">Log Out</button></li>
            </ul>
        </div>
    </div>
    `,
  
    data() {
      return {
        decade: 0,
        media: 'movies'
        //navdisplay: "none",
      };
    },
  
    created: function () {
    },
  
    methods: {
      changeMediaType(e) {
        //changes the component type
        const menu = document.querySelector(".menu");
        this.updateMedia(e);
  
        if (this.showMenu === false) {
          menu.classList.add("show");
        } else {
          menu.classList.remove("show");
        }
      },
  
      updateMedia(e) {
        var media = e.currentTarget.querySelector("img").id;
        this.media = media;
        this.$emit('updateMedia', this.media);
      },
  
          // updateDecade(e) {
      //   var decade = e.currentTarget.querySelector("a").id;
      //   this.decade = decade;
      //   console.log(this.decade);
      //   this.$emit('updateDecade', this.decade)
      // },
  
      logout() {
        this.$router.push({ path: "/" });
        this.authenticated = false;
        localStorage.clear("cachedUser");
      }
    }
  }
  