import PropTypes from 'prop-types';
import Menu from "./Menu";

const AllMenu = ({ menus }) => {
  return (
    <div className="w-3/5 grid grid-cols-2 gap-5">
      {menus.map((menuInfo, index) => (
        <Menu key={index} menuInfo={menuInfo}></Menu>
      ))}
    </div>
  );
};

AllMenu.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({
    recipe_image: PropTypes.string.isRequired,
    recipe_name: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    preparing_time: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

export default AllMenu;