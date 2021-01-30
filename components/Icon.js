import styles from './Icon.module.css';

const Icon = ({link, icon, size}) => {
  if (!size) { size = 'fa-2x' }
  return (
    <a href={link} target="_blank">
      <i className={`${icon} ${size}`}></i>
    </a>
  );
};

export default Icon;