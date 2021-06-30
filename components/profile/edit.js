import { useState, useEffect } from 'react';
import Link from "next/dist/client/link";
import editProfileCSS from '../../styles/editProfile.module.css';

import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';
import { formatData } from '../utils/formatData';

function Edit() {
    const [ data, setData ] = useState({
        name: "",
        bio: "",
        phone: 0,
        email: "",
        photo: ""
    });
    const [ photo, setPhoto ] = useState({});
    const { auth: { user } } = useAuth();
    const { handleEditMe } = useUser();

    const handleData = function (e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const handlePhoto = function(e) {
        setPhoto( e.target.files[0] )
    }

   const updateMe = function() {   
        const newObject = {};
        const getData = formatData(data, 'name', 'bio', 'email', 'phone');
        Object.keys(getData).forEach(field => {
            if(user[field] !== getData[field] ) newObject[field] = getData[field]; 
        });
        if(Object.keys(newObject).length !== 0) return newObject;
        return null;
   }

    const handleSubmit = async function(e) {
        e.preventDefault();
        let imagen = null;
        const dataMe = updateMe();
        if(photo.name) imagen = photo;
        if(!dataMe && !imagen) return;
        handleEditMe(dataMe, imagen);
    };
    
    useEffect(()=>{
        setData(user);
    }, [user]);

    return(
       <>
        <section className="section">
          <div className={editProfileCSS.content__back}>
                <Link href="/">
                    <a className={`${editProfileCSS.btn_back} text-primary`}>&larr;Back</a>
                </Link> 
          </div>
            <form 
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className={`${editProfileCSS.form__edit} u-spacing-1 html_app`}
            >
                <div className="u-spacing-1">
                    <h1 className="text-primary-big">Change info</h1>
                    <p className="text-primary-fm">Changes will be reflected to every services</p>
                </div>
                
                <div className={editProfileCSS.form__item_img}>
                   <div className={editProfileCSS.form__upload_photo}>
                        <input 
                            type="file"
                            name="photo"
                            accept="image/*"
                            className={editProfileCSS.form__upload}
                            onChange={ handlePhoto }
                        />
                         <img src={`${process.env.REACT_APP_PROD_PHOTO}${data?.photo}`} alt="user" />
                   </div>
                    <label className="text-primary-fm"> { photo.name ? photo.name : "CHANGE PHOTO" } </label>
                </div>

                <div className={editProfileCSS.form__item_field}>
                    <label className="text-primary-fm">Name</label>
                    <input 
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={data?.name}
                        onChange={handleData}
                        className={editProfileCSS.form__item_input}
                        required
                    />
                </div>

                <div className={editProfileCSS.form__item_field}>
                    <label  className="text-primary-fm">Bio</label>
                    <textarea
                        placeholder="Enter your bio"
                        name="bio"
                        defaultValue={data?.bio}
                        onChange={handleData}
                        className={editProfileCSS.form__item_textarea}
                        required
                    >
                    </textarea>
                </div>

                <div className={editProfileCSS.form__item_field}>
                    <label  className="text-primary-fm">Phone</label>
                    <input 
                        type="number"
                        min="8"
                        placeholder="Enter your phone"
                        name="phone"
                        value={data?.phone}
                        onChange={handleData}
                        className={editProfileCSS.form__item_input}
                        required
                    />
                </div>

                <div className={editProfileCSS.form__item_field}>
                    <label  className="text-primary-fm">Email</label>
                    <input 
                        type="email"
                        placeholder="Enter your name"
                        name="email"
                        value={data?.email}
                        onChange={handleData}
                        className={editProfileCSS.form__item_input}
                        required
                    />
                </div>

                <input
                    type="submit"
                    value="Save"
                    className={`btn btn__blue btn__sm`}
                />

            </form>
        </section>
       </>
    );

}
export default Edit;