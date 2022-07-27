const UI={
     loadSelectors(){
        const cityElm = document.querySelector('#city')
        const cityInfoElm = document.querySelector('#w-city')
        const iconElm = document.querySelector('#w-icon')
        const temperatureElm = document.querySelector('#w-temp')
        const pressureElm = document.querySelector('#w-pressure')
        const humidityElm = document.querySelector('#w-humidity')
        const feelElm = document.querySelector('#w-feel')
        const formElm = document.querySelector('#form')
        const countryElm = document.querySelector('#country')
        const messageElm = document.querySelector('#messageWrapper')
        return{
            cityElm,
            cityInfoElm,
            iconElm,
            temperatureElm,
            pressureElm,
            humidityElm,
            feelElm,
            formElm,
            countryElm,
            messageElm
        }
    },
    hideMessage(){
      const messageElm=document.querySelector('#message')
      setTimeout(()=>{messageElm.remove()},2000)
    },
    showMessage(msg){
      const{messageElm}=this.loadSelectors()
      const elm=`<div class='alert alert-danger'id='message'>${msg}</div>`
      messageElm.insertAdjacentHTML('afterbegin',elm)
      this.hideMessage()
    },
    validateInput(country,city){
     if(country===''||city===''){
        this.showMessage('please provide information')
        return true
     }else{
        return false
     }
    },
    getInputValue(){
        const {countryElm,cityElm}=this.loadSelectors()
        const isInValid=this.validateInput(countryElm.value,cityElm.value)
        if(isInValid) return
        console.log(isInValid)
        return{
            country:countryElm.value,
            city:cityElm.value
        }
    },
    resetInput(){
     const{countryElm,cityElm}=this.loadSelectors()
     countryElm.value=''
     cityElm.value=''
    },
    init(){
        const{formElm}=this.loadSelectors()
        formElm.addEventListener('submit',evt=>{
            evt.preventDefault()
            const {country,city}=this.getInputValue()
            this.resetInput()
        })
    },
} 
UI.init()  

