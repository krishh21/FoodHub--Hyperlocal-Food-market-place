import { useEffect, useState } from "react";

const useRestrauntsMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9993217&lng=73.79001880000001&restaurantId=${resId}`
        );
        const json = await data.json();
        setResInfo(json?.data);
        console.log(json)
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  return resInfo;
};

export default useRestrauntsMenu;
