import PropTypes from 'prop-types';

export const ItemListContainer = ({ message }) => {
  return (
    <h1>{message}</h1>
  );
};

ItemListContainer.propTypes = {
  message: PropTypes.string,
};