import { useNavigate } from "react-router-dom";
import "./directory-item.component.scss";
const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  const onNavigationHandler = () => navigate(route);
  return (
    <div className="directory-item-container" onClick={onNavigationHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* <img src="" alt="" /> */}
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
