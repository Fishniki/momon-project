/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BiSearch,
  BiCreditCard,
  BiDoughnutChart,
  BiUser,
  BiHome,
  BiTrash,
} from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

// eslint-disable-next-line no-unused-vars
export default function ContentLeft({ button, value }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:1234/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true, // Pastikan mengirim cookies
          });
          setUser(response.data);
          const idUser = response.data.id
          console.log(`id nya adalah ${idUser}`)

          const readRespons = await axios.get(`http://localhost:1234/api/read/${idUser}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true
          });
          console.log(readRespons.data)        
          setData(readRespons.data)
        } else {
          navigate("/login");
        }
      } catch (e) {
        console.log(`Ada error: ${e}`);
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

  const[amount, setAmount] = useState('')
  const[deskripsi, setDeskripsi] = useState('')
  const[type, setType] = useState('')

  const handleCreate = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        'http://localhost:1234/api/create',
        { amount:Number(amount), deskripsi, type }, // Convert amount to number
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      alert("Data berhasil ditambahkan");
      setAmount('');
      setDeskripsi('');
      navigate("/")
    } catch (error) {
      alert("Terjadi kesalahan: " + error.message);
      console.error(error);
    }
  };

  const handleDelete = async (ID) => {
    try{
      const token = localStorage.getItem("token")
      const response = await axios.delete(`http://localhost:1234/api/delete/${ID}`, {
        headers:{
          Authorization: `Bearer${token}`
        },
        withCredentials: true
      })
      alert(`Data berhasil di hapus ${response.data.message}`)
      setData(data.filter(item => item.id !== ID));

    }catch(e) {
      console.log(e)
    } 
  }

  const [edit, setEdit] = useState(true)
  const [currentCrud, setcurrentCrud] = useState(null)

  const editHandler = (crud) => {
    setEdit(false)
    setcurrentCrud(crud)
    setAmount(crud.amount)
    setDeskripsi(crud.deskripsi)
    setType(crud.type)
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    try{
      const token = localStorage.getItem("token")
      const response = axios.put(`http://localhost:1234/api/update/${currentCrud.id}`, {
        amount: Number(amount), deskripsi, type
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      },
    )
    console.log(response.data)
    alert("Data telah diperbarui")
    } catch (e) {
      console.error(e)
    }
  }
  
  const trailingActions = (ID, item) => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => handleDelete(ID)}
      >
        <div className="flex items-center px-4">
          <BiTrash size={20} color="white" className="cursor-pointer" />
        </div>
      </SwipeAction>
      
        <div className="flex items-center bg-res-100 px-4">
          <FiEdit2  size={30} onClick={() => editHandler(item)} color="white" className="cursor-pointer"/>
        </div>
    </TrailingActions>
  );

  return (
    <section className="content-left px-16 flex-1 pt-14 h-screen overflow-y-scroll ">
      <div className="border border-gray-300 rounded-lg w-full flex items-center py-3 px-3 ">
        <BiSearch className="mr-2" />
        <input
          type={"text"}
          className="flex-1 outline-none"
          placeholder="Search"
        />
      </div>

      <h3 className="text-xl text-indigo-700 my-8">
        Welcome {user ? user.nama : "Guest"}
      </h3>

      <div className="flex flex-row space-x-6">
        <Card
          bgColor={"bg-green-600"}
          txtColor={"text-green-600"}
          icon={<BiCreditCard size={25} />}
          label={<span className="text-sm">Gaji bersih Rp.10.000.000</span>}
        />
        <Card
          bgColor={"bg-indigo-600"}
          txtColor={"text-indigo-600"}
          icon={<BiDoughnutChart size={25} />}
          label={<span className="text-sm">Total pengeluaran Rp.3000000</span>}
        />
        <Card
          bgColor={"bg-orange-600"}
          txtColor={"text-orange-600"}
          icon={<BiUser size={25} />}
          label={<span className="text-sm">Total Pemasukan Rp.3000000</span>}
        />
        <Card
          bgColor={"bg-teal-600"}
          txtColor={"text-teal-600"}
          icon={<BiHome size={25} />}
          label={<span className="text-sm">Kondisi keuangan </span>}
        />
      </div>

      <div className="mt-20">
        {data.map((val, index) => (
          <div key={index} className="rounded-2xl bg-indigo-700 mb-4">
            <SwipeableList threshold={0.9} type={Type.IOS}>
              <SwipeableListItem trailingActions={trailingActions(val.id, val)}>
                <div id={val.id} className="bg-white p-4 rounded-xl border border-gray-200 w-full flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`flex items-center p-2 mr-2 ${val.type === "Pengeluaran" ? 'bg-red-300' :  'bg-green-300'} bg-green-500 rounded-full`}>
                        {val.type === "Pengeluaran" ? <HiArrowDown size={15} color="black" /> :  <HiArrowUp size={15} color="black" />}
                    </div>
                    <div className="text-sm flex gap-4 items-center">
                      <div className={`${val.type === "Pengeluaran" ? 'text-red-300' : 'text-green-300'} font-semibold`}>{val.deskripsi}</div>
                      <div className="text-[15px] font-semibold text-slate-600">{new Date(val.date).toLocaleString()}</div>
                      <div className="text-gray-400 text-[15px]">{val.amount}</div>
                    </div>
                  </div>
                </div>
              </SwipeableListItem>
            </SwipeableList>
          </div>
        ))}
      </div>

      {/* popup crud */}
      <div
        onClick={button}
        className={`w-full h-full ${value && edit ? "hidden" : "flex"
        } top-0 left-0 right-0 bottom-0 justify-center items-center absolute`}
      >
        <div
          className="w-64 rounded-md bg-slate-200 p-6 shadow-lg border"
          onClick={(e) => e.stopPropagation()}
        >
          <form className="flex flex-col" onSubmit={edit ? handleCreate : handleUpdate} method={edit ? 'POST' : 'PUT'}>
            <label htmlFor="amount" className="mb-2">
              Nominal
            </label>
            <input
              type="number"
              name="amount"
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Masukan nominal"
              id="amount"
              className="border rounded-lg mb-4 p-2 outline-none"
            />
            <label htmlFor="email" className="mb-2">
              Deskripsi
            </label>
            <input
              type="text"
              name="deskripsi"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Masukan deskripsi"
              id="deskripsi"
              className="border rounded-lg mb-4 p-2 outline-none"
            />
            <div className="w-full ">
              <label htmlFor="password" className="mb-2">
                Type
              </label>
              <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full p-3">
                <option className="p-3 w-full" value="Pemasukan">
                  Pemasukan
                </option>
                <option className="p-3 w-full" value="Pengeluaran">
                  Pengeluaran
                </option>
              </select>
            </div>

            <div className="flex gap-2 justify-center mt-3">
              <button
                onClick={(e) => e.stopPropagation()}
                type="button"
                className="px-3 py-2 bg-red-500 hover:bg-sky-500 font-semibold text-white rounded-md"
              >
              <IoClose className="text-xl font-bold"/>
              </button>
              <button
                type="submit"
                className="py-2 px-3 bg-green-500 hover:bg-sky-500 font-semibold text-white rounded-md"
              >
                <FaCheck className="text-xl"/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Card(props) {
  return (
    <div
      className={`rounded-xl ${props.bgColor} bg-opacity-10 px-5 py-7 w-36 ${props.txtColor} space-y-4`}
    >
      <div>{props.icon}</div>
      <div>{props.label}</div>
    </div>
  );
}
