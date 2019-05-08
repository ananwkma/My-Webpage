import React, { Component } from 'react';
import '../styles/Rankings.scss';

class Rankings extends Component {
  render() {
    return (
      <div className="RankingsContainer">

        <div className="PlayingContainer"> 
          <div>
            <h2> Currently Playing </h2>
          </div>

          <div> 
            <h2> Lichess </h2>
            Current Bullet Elo: 1688 <br/>
            Current Blitz Elo: 1528 <br/>
            Current Classical Elo: 1628 <br/>
            Favorite Opening: Queen's Gambit <br/>
          </div>
          <div> 
           <h2> Tekken 7 </h2>
            Highest Rank: Juggernaut <br/>
            Current Rank: Juggernaut <br/>
            Favorite Character: King <br/>
          </div>
        </div>


        <div className="PlayingContainer"> 
          <h2> Past </h2>
          <div> 
            <h2> League of Legends </h2>
            IGN: Leonidesu <br/>
            Highest Rank: Gold IV <br/>
            Favorite Character: Pantheon <br/>
          </div>
          <div> 
            <h2> Magic: the Gathering Arena </h2>
            IGN: UnbanPod <br/>
            Highest Rank: <br/>
            Favorite Deck: Esper Control <br/>
          </div>
          <div> 
            <h2> Hearthstone </h2>
            IGN: DudeGetBack <br/>
            Highest Rank: Rank 2 <br/>
            Favorite Deck: Shudderwock Shaman <br/>
          </div>
          <div> 
            <h2> Magic: the Gathering (Paper) </h2>
            Favorite Deck: UWR Splinter Twin <br/>
          </div>
          <div> 
            <h2> Super Smash Bros. Project M </h2>
            Favorite Character: Snake <br/>
          </div>

        </div>
      </div>
    );
  }
}

export default Rankings;
