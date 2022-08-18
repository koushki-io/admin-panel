
import profile1 from '../images/profile_list1.jpg'
import profile2 from '../images/profile_list2.jpg'
import profile3 from '../images/profile_list3.jpg'
import profile4 from '../images/profile_list4.jpg'
import profile5 from '../images/profile_list5.jpg'
import profile6 from '../images/profile_list6.jpg'
import profile7 from '../images/profile_list7.jpg'
import profile8 from '../images/profile_list8.jpg'
import profile9 from '../images/profile_list9.jpg'
import profile10 from '../images/profile_list10.jpg'
import axios from 'axios'

export const userRows = [
  { id: 1, username: 'reza ahmadi', avatar: profile1,jobTitle:"Soft enginner",email:"Rahmadi35@gmail.com" , status: 'active',transaction:"$57.30" },
  { id: 2, username: 'aryan sabzi', avatar: profile2,jobTitle:"Software project manager",email:"Asabzi546@gmail.com" , status: 'active',transaction:"$46.02" },
  { id: 3, username: 'shayan kermani', avatar: profile3,jobTitle:"Project Control Specialist",email:"SHkermani4567@gmail.com" , status: 'active',transaction:"$243.35" },
  { id: 4, username: 'zahra alipor', avatar: profile4,jobTitle:"Software analyst and architect",email:"Zalipor45@gmail.com" , status: 'active',transaction:"$150.44" },
  { id: 5, username: 'ghazal yasery', avatar: profile5,jobTitle:"Artificial intelligence expert",email:"GHyasery3463@gmail.com" , status: 'active',transaction:"$65.64" },
  { id: 6, username: 'mojhgan hosiyni', avatar: profile6,jobTitle:"BI business intelligence expert",email:"Mhosyni235@gmail.com" , status: 'active',transaction:"$235.76" },
  { id: 7, username: 'melisa ghasemi', avatar: profile7,jobTitle:"Software and application engineer",email:"Mghasemi896@gmail.com" , status: 'active',transaction:"$76.35" },
  { id: 8, username: 'zeynab khorasani', avatar: profile8,jobTitle:"Software design and production consultant",email:"Zkhorasani575@gmail.com" , status: 'active',transaction:"$235.24" },
  { id: 9, username: 'mohammad rezai', avatar: profile9,jobTitle:"Software documentation expert",email:"Mrezai65@gmail.com" , status: 'active',transaction:"$64.65" },
  { id: 10, username: 'hosiyn bazvand', avatar: profile10,jobTitle:"Database expert",email:"Hbazvand977@gmail.com" , status: 'active',transaction:"$47.87" },
 
]

export const productsData=async()=>{
  const {data}=await axios.get("https://fakestoreapi.com/products")
  return data

}




export const UserData = [
    {
      "name": "Jun",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Jul",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
        "name": "Aug",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      },
      {
        "name": "Sep",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      },
      {
        "name": "Oct",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      },
      {
        "name": "Nov",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      },
      {
        "name": "Des",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
      }
  ]


  export const UserData2 = [
    {
      "name": "Jun",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    }
   
  ]