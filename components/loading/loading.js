
import LoadingCSS from './loading.module.css';

export default  function Loading(){
    return(
        <>
        <div className={LoadingCSS.component_loading}>
            <div className={LoadingCSS.lds_ring}><div></div><div></div><div></div></div>
        </div>
        </>
    )
}