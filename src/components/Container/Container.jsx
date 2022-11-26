import css from './Container.module.css';

export default function Section({ children }) {
  return <div className={css.container}>{children}</div>;
}
