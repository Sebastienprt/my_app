import "./PincodeInput.css"

function PincodeInput(){
   // const [utilisateur, setUtilisateur] = useState([
     //   {email: "sebastienprt@gmail.com", pincode: 1234}]);
    
        // comportement
const handleInput =(event) => {

    const valeur = event.target.value;

    if(isNaN(valeur)){
        event.target.value = "";
        return;
    }
    if(valeur.length){
        event.target.disabled = true;
        if(event.target.previousSibling){
            event.target.previousSibling.type = "password";
        }
        if (event.target.nextSibling){
            event.target.nextSibling.focus();
        } else {
        const enterCode = document.querySelectorAll(".enterCode");
        let code = "";
        enterCode.forEach((saisie) => (code += saisie.value));
        console.log(code)
        }
    }
}
        // Render
return(
    <div>
<input type="text" id = "pin1" className="enterCode" onInput={handleInput}  />

<input type="text" id = "pin2" className="enterCode" onInput={handleInput} />

<input type="text" id = "pin3" className="enterCode" onInput={handleInput} />

<input type="text" id = "pin4" className="enterCode" onInput={handleInput}/>

    </div>

)

   
        
    }

    export default PincodeInput;