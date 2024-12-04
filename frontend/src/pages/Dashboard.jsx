import React, { useEffect, useState } from "react";
import AppBar from "../Components/AppBar";
import BalanceComponent from "../Components/BalanceComponent";
import UsersComponent from "../Components/UsersComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const url = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const navigate = useNavigate()
  const [balance, setBalance] = useState("");
  const [transferState, setTransferState] = useState(false)
  const [users,setUsers] = useState([])
  const [search,setSearch] = useState('')
  const [fname,setFname] = useState('')
  const auth = async () => {
    try{
      const response = await axios({
        method:'get',
        url:`${url}/api/v1/user/me`, //http://192.168.230.221:3000
        headers:{
          'Authorization':'Bearer '+localStorage.getItem('token')
        }
      })  
  }
    catch(e){
      navigate('/signup') 
      console.log(e.response.data.message)
    } 
  }

  const userdata = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${url}/api/v1/user/getUserDetails`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      localStorage.setItem("firstname", response.data.firstname);
      localStorage.setItem("lastname", response.data.lastname);
      setFname(response.data.firstname)
      setTransferState((s) => setTransferState(!s));
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  const loadData = async () => {
    try{
      const value  = search ? search : ""
     const response = await axios({
        method:"get",
        url:`${url}/api/v1/user/bulk`,
        headers:{
          'Authorization':"Bearer " + localStorage.getItem("token")
        },
        params:{
          filter:value
        }
      })
      setUsers(response.data.users)

    }
    catch(e){
      console.log("In catch block "+response.data.message)
    }
  }
  useEffect(()=>{
    loadData()
  },[search])

  useEffect(() => {
    userdata()
    auth()
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${url}/api/v1/account/balance`,
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        setBalance(Math.ceil(response.data.balance));
      } catch (e) {
        console.log(e.response.message);
      }
    };
    fetchData();
  }, [transferState]);


  return (
    <div>
      <AppBar firstname={fname} />
      <BalanceComponent balance={balance} />
      <UsersComponent users={users} setSearch = {setSearch}/>
    </div>
  );
};

export default Dashboard;
