const handleLogin = (email, password, auth, history, setErrorSignin) => {
    //thực hiện đăng nhập trong firebase
    auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //successfully
            if (auth) {
                history('/');
            }
        })
        .catch(() => setErrorSignin('Tài khoản không tồn tại'));
    //---------------------------------
};

const handelRegister = (email, password, auth, history, setErrorRegister) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //successfully
            if (auth) {
                history('/');
            }
        })
        .catch(() => setErrorRegister('Tài khoản này đã tồn tại'));
};

export { handleLogin, handelRegister };
