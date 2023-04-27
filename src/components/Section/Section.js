import {SectionContainer} from './Section.styled'
import PropTypes from 'prop-types';

export default function Section(props) {
  const { title, children } = props;
  return (
    <section>
      {title && <SectionContainer>{title}</SectionContainer>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
