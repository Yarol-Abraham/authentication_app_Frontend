export const hideAlert = ()=>{
    const el = document.querySelector('.alert');
    if(el) el.parentElement.removeChild(el);
};

export const showAlert = (type, message)=>{
    hideAlert();
    document.querySelector('.html_app').style.opacity = 1;
    const markup = ` <div class="alert alert--${type}">${message}</div>`;
    document.querySelector('.section').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, 5000);
};

export const hideLoading = ()=>{
    const el = document.querySelector('.lds_ring');
    if(el) el.parentElement.removeChild(el);
}

export const showLoading = ()=>{
    const markup = `
        <div class="component_loading">
            <div class="lds_ring"><div></div><div></div><div></div></div>
        </div>
    `;
    document.querySelector('.section').insertAdjacentHTML('afterbegin', markup);
    document.querySelector('.html_app').style.opacity = 0;
}