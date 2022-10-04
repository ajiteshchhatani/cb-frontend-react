function wrapPromise(promise) {
    let status = 'pending';
    let response;

    const suspender = promise.then(
        (res) => {
            status = 'success';
            response = res
        },
        (err) => {
            status = 'error';
            response = err
        }
    )

    return {
        read() {
            switch (status) {
                case 'pending':
                    throw suspender
                case 'error':
                    throw response
                default:
                    return response
            }
        }
    }
}

export default wrapPromise