import PropTypes from "prop-types";

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li className="button">
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};
