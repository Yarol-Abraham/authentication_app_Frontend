import profileCSS from '../../styles/profile.module.css';

function DataProfile() {
    return (
    <>
        <div className={`${profileCSS.profile_data} ${profileCSS.border_profile} ${profileCSS.border_profile_sm}`}>
            <div className={profileCSS.profile__data_field}>
              <p className="text-primary-fm">PHOTO</p>
            </div>
            <div className={profileCSS.profile__img_field}>
                <img src="/images/19-test1@correo.com.jpeg" alt="user" />
            </div>
          </div>
        <div className={`${profileCSS.profile_data} ${profileCSS.border_profile} ${profileCSS.border_profile_sm}`}>
            <div className={profileCSS.profile__data_field}>
              <p className="text-primary-fm">NAME</p>
            </div>
            <div className={profileCSS.profile__data_field}>
              <p className="text-secondary">Yarol Abraham</p>
            </div>
        </div>
        <div className={`${profileCSS.profile_data} ${profileCSS.border_profile} ${profileCSS.border_profile_sm}`}>
            <div className={profileCSS.profile__data_field}>
              <p className="text-primary-fm">BIO</p>
            </div>
            <div className={profileCSS.profile__data_field}>
              <p className="text-secondary">I am a software developer...</p>
            </div>
        </div>
        <div className={`${profileCSS.profile_data} ${profileCSS.border_profile} ${profileCSS.border_profile_sm}`}>
            <div className={profileCSS.profile__data_field}>
              <p className="text-primary-fm">EMAIL</p>
            </div>
            <div className={profileCSS.profile__data_field}>
              <p className="text-secondary">xanthe.neal@gmail.com</p>
            </div>
        </div>
        <div className={`${profileCSS.profile_data} ${profileCSS.border_profile} ${profileCSS.border_profile_sm}`}>
            <div className={profileCSS.profile__data_field}>
              <p className="text-primary-fm">PHONE</p>
            </div>
            <div className={profileCSS.profile__data_field}>
              <p className="text-secondary">57501569</p>
            </div>
        </div>
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