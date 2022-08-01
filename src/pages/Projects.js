import React from 'react';
import CardItem from '../components/js/CardItem';
import { PROJECT_PHOTO_1, PROJECT_PHOTO_2, PROJECT_PHOTO_3 } from '../components/js/Constants';
import Cover from '../components/js/Cover';

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
                  src={PROJECT_PHOTO_1}
                  text="Simple tic tac toe game"
                  label='Mini game'
                  path='/projects/tictactoe'
                />
                <CardItem 
                  src={PROJECT_PHOTO_2}
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
                  src={PROJECT_PHOTO_3}
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
