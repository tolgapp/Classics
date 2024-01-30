import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/loader.css';

const Loader = () => {

    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/home');
        }, 3000)
    }, [navigate])

  return (
    <>
      <div className="boxes">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <h3 className='mt-96 font-mono'>Loading ...</h3>
    </>
  );
};

export default Loader;
