import "./category-item.style.scss";

const CategoryItem = (props) => {
  //refactoring props recived from dirctory
  const { imageUrl, title } = props.category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
