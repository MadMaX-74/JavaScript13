const checkPromo = (str, elem, value) => {
    const regExp = /^тело2020$/ig;
    if(regExp.test(str)) {
        elem.textContent = Math.ceil(+value * 7 / 10);
    } else {
        elem.textContent = value;
    }
};

export default checkPromo;