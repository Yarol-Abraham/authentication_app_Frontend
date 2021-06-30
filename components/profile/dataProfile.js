import { useEffect, useState } from 'react';
import profileCSS from '../../styles/profile.module.css';
import useAuth from '../hooks/useAuth';
import { formatData } from '../utils/formatData';
function DataProfile() {
  const [ data, setData ] = useState({});
  const { auth: { user } } = useAuth();

  useEffect(()=>{
    setData(formatData(user, 'photo','name', 'bio', 'email', 'phone'));
  }, [])
    return (
    <>
      {
        Object.keys(data).reverse().map(me => (
          <div 
            key={me}
            className={`${profileCSS.profile_data} ${profileCSS.border_profile} ${profileCSS.border_profile_sm}`}
          >
            <div className={profileCSS.profile__data_field}>
              <p className="text-primary-fm">{`${me.toUpperCase()}`}</p>
            </div>
            <div className={ me === "photo" ? profileCSS.profile__img_field : profileCSS.profile__data_field}>
                { 
                me === "photo" ? <img src={`${process.env.REACT_APP_PROD_PHOTO}${data[me]}`} alt={`${data[me]}`} /> : 
                <p className="text-secondary">{data[me]}</p>
              }
            </div>
          </div>          
        ))
      }
      <div className={`${profileCSS.profile_data} ${profileCSS.border_profile} ${profileCSS.border_profile_sm}`}>
            <div className={profileCSS.profile__data_field}>
              <p className="text-primary-fm">PASSWORD</p>
            </div>
            <div className={profileCSS.profile__data_field}>
              <p className="text-secondary">**********</p>
            </div>
        </div>
    </>
    )
};

export default DataProfile;