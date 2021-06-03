class Square{
    constructor(value){
        this.value = value
    }

    get value(){
        return this._value
    }

    set value(value){
        this._value = value
    }

    getArea(){
        return this.value * this.value
    }
}

export default Square