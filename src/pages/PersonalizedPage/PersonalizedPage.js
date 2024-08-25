import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

import "./PersonalizedPage.css";
import { useDispatch, useSelector } from "react-redux";
import { News } from "../../components";
import {
  setPreferredAuthors,
  setPreferredCategories,
  setPreferredSources,
} from "../../store/slices/articlesSlice";
function PersonalizedPage() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const { articles } = useSelector((state) => state.articles);
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([])

  const handleCloseSidebar = () => setShow(false);
  const handleShowSidebar = () => setShow(true);

  const handleAuthorCheckboxChange = (source) => {
    setSelectedAuthors((prevSelectedSources) =>
      prevSelectedSources.includes(source)
        ? prevSelectedSources.filter((s) => s !== source)
        : [...prevSelectedSources, source]
    );
    dispatch(setPreferredAuthors(selectedAuthors));
  };

  const handleSourcesCheckboxChange = (author) => {
    setSelectedSources((prevSelectedAuthors) =>
      prevSelectedAuthors.includes(author)
        ? prevSelectedAuthors.filter((s) => s !== author)
        : [...prevSelectedAuthors, author]
    );
    dispatch(setPreferredSources(selectedSources));
  };

  const handleCategoriesCheckboxChange = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((s) => s !== category)
        : [...prevSelectedCategories, category]
    );
    dispatch(setPreferredCategories(selectedCategories));
  };

  const uniqueSources = [...new Set(articles.map((article) => article.source))];
  const uniqueAuthors = [...new Set(articles.map((article) => article.author))];
  const uniqueCategories = [...new Set(articles.map((article) => article.category))];

  // If all unique sources are selected, return all articles
  const filteredArticles =
    selectedSources.length === uniqueSources.length
      ? articles
      : articles.filter(
          (article) =>
            selectedSources.includes(article.source) ||
            selectedAuthors.includes(article.author) ||
            selectedCategories.includes(article.category)
        );

  console.log(filteredArticles);

  return (
    <>
      <div
        className="mt-500"
        style={{
          color: "#fff",
          marginTop: "100px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="primary" onClick={handleShowSidebar}>
          Set Personalized News
        </Button>
      </div>
      <div>
        <News personalized={filteredArticles} handleShowSidebar={handleShowSidebar}/>
        <Offcanvas show={show} onHide={handleCloseSidebar} variant="dark">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h1>Personalized Filter</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <Offcanvas.Body>
            <h4>Filter By Sources</h4>
            <Form className="sources checkbox-container">
              {uniqueSources.map((source) => (
                <div key={`default-${source}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id={`default-${source}`}
                    label={source}
                    value={source}
                    checked={selectedSources.includes(source)}
                    onChange={() => handleSourcesCheckboxChange(source)}
                  />
                </div>
              ))}
            </Form>
            <hr />
            <h4>Filter By Authors</h4>
            <Form className="authors checkbox-container">
              {uniqueAuthors.map((author) => (
                <div key={`default-${author}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id={`default-${author}`}
                    label={author}
                    value={author}
                    checked={selectedAuthors.includes(author)}
                    onChange={() => handleAuthorCheckboxChange(author)}
                  />
                </div>
              ))}
            </Form>
            <hr />
            <h4>Filter By Categories</h4>
            <Form className="categories checkbox-container">
              {uniqueCategories.map((category) => (
                <div key={`default-${category}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id={`default-${category}`}
                    label={category}
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoriesCheckboxChange(category)}
                  />
                </div>
              ))}
            </Form>
          </Offcanvas.Body>
          <hr />
          <div className="offcanvas-footer">
            <Button variant="primary" onClick={handleCloseSidebar}>
              Close
            </Button>
          </div>
        </Offcanvas>
      </div>
    </>
  );
}

export default PersonalizedPage;
