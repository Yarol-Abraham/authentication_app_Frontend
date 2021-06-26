import { useEffect, useState } from 'react';
import profileCSS from '../../styles/profile.module.css';
import useAuth from '../hooks/useAuth';

function DataProfile() {
  const [ data, setData ] = useState({});
  const { auth: { user } } = useAuth();

  const formatData = function (data, ...allowFields) {
    let newData = {};
      Object.keys(data).forEach(el =>{
        if( allowFields.includes(el) ) newData[el] = data[el];
      });
      setData(newData);
  };
  useEffect(()=>{
    formatData(user, 'photo','name', 'bio', 'email', 'phone');
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
                me === "photo" ? <img src="/images/19-test1@correo.com.jpeg" alt="user" /> : 
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