import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.style.scss";

const categories = [
  {
    id: 1,
    title: "men",
    imageUrl: "https://i.ibb.co/z2yHGPC/men.jpg",
    route: "shop/mens",
  },
  {
    id: 2,
    title: "women",
    imageUrl: "https://i.ibb.co/BVvpp29/women2.jpg",
    route: "shop/womens",
  },
  {
    id: 3,
    title: "kids",
    imageUrl: "https://i.ibb.co/vqhQJT0/kids.jpg",
    route: "shop/jackets",
  },
  {
    id: 4,
    title: "jewlery",
    imageUrl: "https://i.ibb.co/C8rzqx3/jewllery4.jpg",
    route: "shop/hats",
  },
  {
    id: 5,
    title: "accessories",
    imageUrl: "https://i.ibb.co/j6xJFPB/access3.jpg",
    route: "shop/sneakers",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
