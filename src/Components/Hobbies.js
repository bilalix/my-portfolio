import React, { Component } from "react";
import { Slide } from "react-reveal";

class Hobbies extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="contact">
        <div className="row">
            <Slide right duration={1000}>
            {/* <h4>Here are some of my favorite books and video games:</h4><br/> */}
            <aside className="eight columns footer-widgets">
              <div className="widget widget_books">
                <h4 className="widget-title">Favorite Books</h4>
                <ul id="books">
                  <li>
                    <a href="https://www.goodreads.com/book/show/40405444-digital-minimalism">Digital Minimalism: Choosing a Focused Life in a Noisy World</a> by Cal Newport
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/15858089-the-sketchnote-handbook">The Sketchnote Handbook: The Illustrated Guide to Visual Note Taking</a> by Mike Rohde
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/821611.The_Story_of_My_Life">The Story of My Life</a> by Helen Keller
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/69571.Rich_Dad_Poor_Dad">Rich Dad, Poor Dad</a> by Robert T. Kiyosaki
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/25744928-deep-work">Deep Work: Rules for Focused Success in a Distracted World</a> by Cal Newport
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/30962055-irresistible">Irresistible: The Rise of Addictive Technology and the Business of Keeping Us Hooked</a> by Adam Alter
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/series/44866-the-inheritance-cycle">The Inheritance Cycle Series</a> by Christopher Paolini
                  </li>
                  <li>
                    <a href="https://www.goodreads.com/book/show/17255186-the-phoenix-project">The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win</a> by Gene Kim, Kevin Behr, George Spafford
                  </li>
                </ul>
              </div>

              
            </aside>
            
            <aside className="four columns footer-widgets">
              
              <div className="widget widget_games">
                <h4 className="widget-title">Favorite Video Games</h4>
                <ul id="games">
                  <li>
                    <a href="./">Uncharted Series</a> (Naughty Dog)
                  </li>
                  <li>
                    <a href="./">The Last of Us Series</a> (Naughty Dog)
                  </li>
                  <li>
                    <a href="./">Ghost of Tsushima</a> (Sucker Punch)
                  </li>
                  <li>
                    <a href="./">God of War</a> By (Santa Monica Studio)
                  </li>
                  <li>
                    <a href="./">Detroit: Become Human</a> (Quantic Dream)
                  </li>
                  <li>
                    <a href="./">Horizon Zero Dawn</a> (Guerrilla Games)
                  </li>
                  <li>
                    <a href="./">Gris</a> (Nomada Studio)
                  </li>
                  <li>
                    <a href="./">The Legend of Zelda: Breath of the Wild</a> (Nintendo)
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Hobbies;
