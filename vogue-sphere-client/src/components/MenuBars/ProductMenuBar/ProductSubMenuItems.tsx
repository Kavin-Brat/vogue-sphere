import { FIELDLABELS } from "../../../constants/Labels";

function ProductSubMenuItems({ sub_menus }) {
  console.log("menuItem", sub_menus);
  return (
    <div>
      {sub_menus && sub_menus.length > 0 ? (
        <>
          {sub_menus.map((item) => (
            <div className="text-white text-xs 2xl:text-base font-medium py-[6px] px-3 2xl:py-[7px] 2xl:px-4 rounded focus:outline-none focus:shadow-outline">{item || FIELDLABELS.na}</div>
          ))}
        </>
      ) : (
        <div>{FIELDLABELS.na}</div>
      )}
    </div>
  );
}

export default ProductSubMenuItems;
