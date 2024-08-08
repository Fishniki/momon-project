/* eslint-disable react/prop-types */
import axios from "axios";
import  { useEffect, useState } from "react";
import {
  BiSearch,
  BiCreditCard,
  BiDoughnutChart,
  BiUser,
  BiHome,
  BiTrash,
} from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

export default function ContentLeft() {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)
      useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('token');
            if (token) {
              const response = await axios.get('http://localhost:1234/api/user', {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                withCredentials: true, // Pastikan mengirim cookies
              });
              setUser(response.data);
            } else {
              navigate('/login');
            }
          } catch (e) {
            console.log(`Ada error: ${e}`);
            navigate('/login');
          }
        };
    
        fetchData();
      }, [navigate]);

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <div className="flex items-center px-4">
          <BiTrash size={20} color="white" />
        </div>
      </SwipeAction>
      <SwipeAction
        destructive={true}
        onClick={() => console.info("swipe action triggered")}
      >
        <div className="flex items-center px-4">
          <FiEdit2 size={20} color="white" />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <section className="content-left px-16 flex-1 pt-14 h-screen overflow-y-scroll ">
      <div className="border border-gray-300 rounded-lg w-full flex items-center py-3 px-3 ">
        <BiSearch className="mr-2" />
        <input type={"text"} className="flex-1 outline-none" placeholder="Search" />
      </div>

      <h3 className="text-xl text-indigo-700 my-8">Welcome {user ? user.nama : "Guest"}</h3>

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
        {Array.from(Array(2)).map((_, index) => (
          <div key={index} className="rounded-2xl bg-indigo-700 mb-4">
            <SwipeableList threshold={0.9} type={Type.IOS}>
              <SwipeableListItem trailingActions={trailingActions()}>
                <div className="bg-white p-4 rounded-xl border border-gray-200 w-full flex ">
                  <img
                    src={
                      "https://images.pexels.com/photos/12467948/pexels-photo-12467948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    alt="img"
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <div className="text-sm ">
                    <div className="text-gray-900">Push</div>
                    <div className="text-gray-400 text-xs">1223415151561</div>
                  </div>
                </div>
              </SwipeableListItem>
            </SwipeableList>
          </div>
        ))}
      </div>

        <div className="w-full h-full flex top-0 left-0 right-0 bottom-0 justify-center items-center absolute">
          <div className="w-64 rounded-md bg-sky-100 p-6">
          <form className="flex flex-col"  method='POST'>
                <label htmlFor="nama" className="mb-2">Nominal</label>
                <input type="text" name='nama_lengkap' placeholder='Masukan nominal' id="nama_lengkap"  className="border rounded-lg mb-4 p-2 outline-none" />
                <label htmlFor="email" className="mb-2">Deskripsi</label>
                <input type="text" name='email' placeholder='Masukan deskripsi' id="email" className="border rounded-lg mb-4 p-2 outline-none" />
                <div className="w-full ">
                <label htmlFor="password" className="mb-2">Type</label>
                  <select name="" id="" className="w-full p-3">
                    <option className="p-3 w-full" value="Pemasukan">Pemasukan</option>
                    <option className="p-3 w-full" value="Pengeluaran">Pengeluaran</option>
                  </select>
                </div>

                <div className='flex gap-2 justify-center mt-3'>
                  <button type="submit" className="w-[50px] inline-block py-2 bg-red-500
                  hover:bg-sky-500 font-semibold text-white rounded-md">Batal</button>
                  <button type="submit" className="w-[50px] inline-block py-2 bg-green-500
                  hover:bg-sky-500 font-semibold text-white rounded-md">Tambah</button>
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