import {React,useState} from 'react'
import styles from "../styles/contactus.module.css"
// import styles1 from "../styles/Home.module.css";
const Contact = () => {
const [name, setname] = useState('')
const [email, setemail] = useState('')
const [phone, setphone] = useState('')
const [desc, setdesc] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(phone,name,email,desc)




const data = { name,email,phone,desc };
fetch('http://localhost:3000/api/contactpost', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.text())
.then(data => {
  console.log('Success:', data);
  alert("Thanks for your reviews !!!!")
  setdesc('')
  setemail('')
  setname('')
  setphone('')
})
.catch((error) => {
  console.error('Error:', error);
  alert("Sorry cannot submit your form !!!!!")
});

  }
  const handleChange=(e)=>{
if(e.target.name=='name'){
  setname(e.target.value);
}
else if(e.target.name=='phone'){
  setphone(e.target.value);
}
else if(e.target.name=='email'){
  setemail(e.target.value);
}
else if(e.target.name=='desc'){
  setdesc(e.target.value);
}
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.contactheading}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
  <div className={styles.mb3}>
    <label htmlFor="name"  className={styles.formlabel}>Enter your name:</label>
    <input type="text" name='name' onChange={handleChange}  value={name} className={styles.formscontrol} id="name" aria-describedby="emailHelp"/>
  </div>

  <div className={styles.mb3}>
    <label htmlFor="email" className={styles.formlabel}>Email address:</label>
    <input type="email" name='email' onChange={handleChange}  value={email} className={styles.formscontrol} id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
  </div>

  <div className={styles.mb3}>
    <label htmlFor="phone" className={styles.formlabel}>Ph No. :</label>
    <input type="phone" name='phone' onChange={handleChange}  value={phone} className={styles.formscontrol} id="phone"/>
  </div>
  <label htmlFor="desc" className={styles.formlabel}>Comments:</label> 
  <div className={styles.mb3}>
  <textarea className={styles.formscontrolss} name='desc' value={desc} onChange={handleChange} placeholder="Leave your reviews here" id="desc"/>
  
</div>

  <button type="submit" className={styles.btn}>Submit</button>
</form>
    </div>
  );
}

export default Contact