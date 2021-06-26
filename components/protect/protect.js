import useAuth from '../hooks/useAuth';
import Layout from '../layout/layout';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '../loading/loading';
const Protect = ({ children }) => {
 
  const [ data, setData ] = useState({});
  const { handleLoginSuccess } = useAuth();
  const router = useRouter();
  const checkAuth = async function(token) {
    try {
      setData( await handleLoginSuccess(token) );
    } catch (error) { return router.push("/login"); }
  };

  useEffect(()=>{
    const token = (Cookies.get('jwt'));
    if(!token) return router.push("/login");
    checkAuth(token);
  }, []);
  return (
    <>
    {
      Object.keys(data).length !== 0 ? <Layout >{children}</Layout> : <Loading />  
    }
    </>
  )
}

export default Protect;