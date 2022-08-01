import React from 'react';
import CardItem from '../js/CardItem';
import photo1 from '../../assets/images/img-6.jpg';
import photo2 from '../../assets/images/img-7.jpg';
import photo3 from '../../assets/images/img-8.jpg';
import Cover from '../js/Cover';

function Projects() {
  return (
    <>
      <Cover className="projects" pageName="Projects" />
      <div>
        <br></br>
        <h1>Check out my mini projects!</h1>
        <div className="container-fluid">
          <div className="cards__wrapper">
              <div className="cards__items">
                <CardItem 
                  src={photo1}
                  text="Simple tic tac toe game"
                  label='Mini game'
                  path='/projects/tictactoe'
                />
                <CardItem 
                  src={photo2}
                  text="Calculator"
                  label='Tool'
                  path='/projects/calculator'
                />
              </div>
              <div className="cards__items">
                {/*<CardItem 
                  src={photo1}
                  text="Minesweeper"
                  label='Mini game'
                  path='/projects/minesweeper'
                />*/}
                <CardItem 
                  src={photo3}
                  text="To do list app"
                  label='Tool'
                  path='/projects/todolist'
                />
              </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Projects;
