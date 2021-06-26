
import Link from 'next/link';
import profileCSS from '../../styles/profile.module.css';
import DataProfile from './dataProfile';

export default function Profile() {
  return (
      <section className={profileCSS.index}>
          <div className="u-spacing-4">
            <h1 className="text-primary-big text-center">Personal Info</h1>
            <p className="text-primary-md text-center">Basic info, like your name and photo</p>
          </div>
          <div className={`${profileCSS.profile} ${profileCSS.border_profile} ${profileCSS.border_profile_sm}`}>
            <div className={profileCSS.profile__content}>
              <h2 className="text-primary-big">Profile</h2>
              <p className="text-primary-fm">Some info may be visible to other people</p>
            </div>
            <Link href="/editProfile">
              <a className={`btn text-secondary ${profileCSS.btn__profile_edit}`}>Edit</a>
            </Link>
          </div>
          <DataProfile />
      </section>
  )
}
