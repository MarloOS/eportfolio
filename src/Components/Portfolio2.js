import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class Portfolio extends Component {
  render() {

    return (
    <section id="portfolio">
      <div className="row">
         <div className="twelve columns collapsed">

            <h1>Stuff I've Made</h1>
            
            <h2>HealHub.com</h2>

            
            
            <p>A website me and my teammates made for our capstone project. I was responsible for the front-end work, which I made using React. The site was designed to allow clients to find a suitable healer for them. The screenshots below show what it looked like by the time we were done with it, excluding the login/signup and personal account pages.</p>
            
              <Container fluid>
                <div class="gallery">
                  <a target="_blank" href="./images/homepage1.png">
                    <img src="./images/homepage1.png" alt="Website homepage screenshot" width="600" height="400"/>
                  </a>
                  <div class="desc">This is the homepage of the site, what you see when you first enter while not logged in.</div>
                </div>
                <div class="gallery">
                  <a target="_blank" href="./images/homepage2.png">
                    <img src="./images/homepage2.png" alt="Healer list screenshot" width="600" height="400"/>
                  </a>
                <div class="desc">Below was the list of available healers (users that made accounts specifying that they wanted to be listed as healers)</div>
                </div>
                <div class="gallery">
                  <a target="_blank" href="./images/healerpage.png">
                    <img src="./images/healerpage.png" alt="Healer page screenshot" width="600" height="400"/>
                  </a>
                <div class="desc">A healer's page looked like this when clicked on. You could read about and leave a review on them, which would update their rating.</div>
                </div>
                <div class="gallery">
                  <a target="_blank" href="./images/gwaterlava.png">
                    <img src="./images/gwaterlava.png" alt="Lava and water materials" width="600" height="400"/>
                  </a>
                  <div class="desc">The water and lava materials were made in the Unity node graph.</div>
                </div>
              </Container>
            
            <hr/>
            <br/>
      
            <h2>GLOOM</h2>
            
            <p>A game I made in Unity for the final project of one of my courses.</p>
            <div class="videoWrapper">
              <iframe margin="auto" width="100%" height="100%" src="https://www.youtube.com/embed/xHPX20q3yGA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p class="center">I had to make designs documents and finish all of the work on this game within a month. Most of the art assets were made by me, and I modified all of the assets that I didn't make from scratch so they would fit in better. </p>
            
            <Container fluid>
                <div class="gallery">
                  <a target="_blank" href="./images/gwaterlava.png">
                    <img src="./images/gwaterlava.png" alt="Lava and water materials" width="600" height="400"/>
                  </a>
                  <div class="desc">The water and lava materials were made in the Unity node graph.</div>
                </div>

                <div class="gallery">
                  <a target="_blank" href="./images/gparticle1.png">
                    <img src="./images/gparticle1.png" alt="Particles on the bridge" width="600" height="400"/>
                  </a>
                <div class="desc">All of the particle effects, like sparks, fire, clouds, explosions, and rain, were made by me in Unity's particle system.</div>
                </div>

                <div class="gallery">
                  <a target="_blank" href="./images/genemy1.png">
                    <img src="./images/genemy1.png" alt="Skeletons running around rocks" width="600" height="400"/>
                  </a>
                <div class="desc">Enemies had basic pathfinding so they could reach the player. They would run around obstacles to get to you.</div>
                </div>

                <div class="gallery">
                  <a target="_blank" href="./images/gcath1.png">
                    <img src="./images/gcath1.png" alt="Spooky cathedral on a big mesa" width="600" height="400"/>
                  </a>
                <div class="desc">The goal is to reach the cathedral at the end. Each area with enemies would only open up after all of them were defeated.</div>
                </div>
                
                <div class="gallery">
                  <a target="_blank" href="./images/gboss1.png">
                    <img src="./images/gboss1.png" alt="Final boss" width="600" height="400"/>
                  </a>
                <div class="desc">I managed to make the final boss in one day. He had two different types of attacks: a deadly ball that would move to the player's current location, and a purple circle that would appear under the player and then explode after a couple of seconds.</div>
                </div>
                <p class="center"></p>
              </Container>
              

            <Container>
              <hr/>
              <br/>
            <h2></h2>
            </Container>
          </div>
      </div>
    </section>
    );
  }
}

export default Portfolio;
