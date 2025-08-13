import PropTypes from 'prop-types';

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li className="button">
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool
};
