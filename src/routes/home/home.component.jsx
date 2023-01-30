import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

export default function Home() {
  const categories = [
    {
      id: 1,
      title: "men",
      imageUrl: "https://i.ibb.co/z2yHGPC/men.jpg"
    },
    {
      id: 2,
      title: "women",
      imageUrl: "https://i.ibb.co/BVvpp29/women2.jpg     "
    },
    {
      id: 3,
      title: "kids",
      imageUrl: "https://i.ibb.co/vqhQJT0/kids.jpg"
    },
    {
      id: 4,
      title: "jewlery",
      imageUrl: "https://i.ibb.co/C8rzqx3/jewllery4.jpg"
    },
    {
      id: 5,
      title: "accessories",
      imageUrl: "https://i.ibb.co/j6xJFPB/access3.jpg"
    }
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
}
