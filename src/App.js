import axios from 'axios';
import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Recipe from './components/Recipe/Recipe';
import Header from './components/Header/Header';
import { Container } from './components/style/InputContainer';
import { ItemContainers } from './components/style/RecepiesRender';

function App() {
  const [userRecipe, setUserRecipe] = useState('');
  const [recipes, setRecipes] = useState([]);

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${userRecipe}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;


  const getData = async() =>{
    const response = await axios.get(URL)
    setRecipes(response.data.hits)
    console.log(response)
  }

  const handleChange = (e) =>{
    setUserRecipe(e.target.value)

  }
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <input
        type="text"
        placeholder="enter the main ingredient"
        onChange={handleChange}
        />

        <button onClick={getData}>
            <i className="fas fa-search"></i>
        </button>

      </Container>

      <ItemContainers>
        {recipes !== [] && recipes.map((recipe) => {
          return <Recipe recipe={recipe.recipe} />
        })}
      </ItemContainers>
    </>
  );
}

export default App;
