import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

export const Head = ({ title = '', description = '' }) => {
  return (
    <Helmet title={title ? `${title} | UNHLS` : undefined} defaultTitle="UNHLS">
      <meta name="description" content={description} />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
