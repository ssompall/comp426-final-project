import RecipeCard from "./recipe-card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const AllRecipeCards = () => {
  const recipesState = useSelector((state) => state.recipes);
  const recipes = recipesState.foodRecipes;
  const msg = recipesState.msg;

  if (recipes.length === 0) {
    return (
      <Fragment>
        <h1 className="text-center mt-5">{msg}</h1>
        <div className="d-flex justify-content-center"> 
          <img
            src="https://www.animatedimages.org/data/media/298/animated-eat-and-drink-image-0261.gif"
            border="0"
            alt="animated-eat-and-drink-0151" 
            style={{ width: "300px" }}
          />
        </div> 
        
      </Fragment>
    );
  }
  return ( 
    <div style={{ background: "#FFD1DC" }}>
    <Container className="my-5">
      <Row className="justify-content-center justify-content-lg-start">
        {recipes.map((recipe) => (
          <Col sm="auto" xl="4" xxl="3" className="mb-5" key={Math.random()}>
            <RecipeCard recipeDetails={recipe} />
          </Col>
        ))}
      </Row>
    </Container> 
    </div>
  );
};
export default AllRecipeCards;
