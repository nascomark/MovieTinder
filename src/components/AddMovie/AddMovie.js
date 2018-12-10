import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AddMovieForm from './AddMovieForm/AddMovieForm';

const AddMovie = props => {

    const handleMovieSubmit = values => {
        fetch('http://localhost:5000/api/movie', {
            method : 'POST',
            body : JSON.stringify({
              title: values.title,
              imageURL: values.imageURL,
              summary: values.summary,
              rating: values.rating
            }),
            headers: {
                'Content-Type': 'application/json',
            },
           })
          .then( resp => {
            if (resp.ok){
              return resp.json();
            } else {
                async function getErorrMessage(){
                  const errorMessage = await resp.json();
                  alert(errorMessage.message);
                }
                getErorrMessage();
            }
          })
          .then( resp => {
            alert(resp.message);
            })
          .catch( error => {
             alert('Network error!');
          })
      }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AddMovieForm onSubmit={handleMovieSubmit}/>
      </MuiThemeProvider>
    )
}

export default AddMovie;