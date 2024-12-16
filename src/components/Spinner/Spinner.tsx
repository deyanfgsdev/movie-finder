import spinner from '../../assets/spinner.gif';

import './Spinner.scss';

const Spinner = () => {
  return (
    <>
      <img src={spinner} alt="Spinner" className="main__spinner" />
    </>
  );
};

export default Spinner;
