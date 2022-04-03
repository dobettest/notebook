```javascript
class MyPromise {
    constructor(fn) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        try {
            fn(this.resolve, this.reject);
        } catch (e) {
            this.reject(e)
        }
    }
    static resolve(value) {
        if (this.state === 'pending') {
            this.state = 'fulfilled';
            this.value = value;
        }
    }
    static reject(reason) {
        if (this.state === 'pending') {
            this.state = 'rejected';
            this.reason = reason;
        }
    }
    then(onFulfilled, onRejected) {
        switch (this.state) {
            case 'fulfilled':
                onFulfilled(this.value);
                break;
            case 'rejected':
                onRejected(this.reason);
                break;
            default:
                break;
        }
    }
}

```